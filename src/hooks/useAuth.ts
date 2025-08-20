'use client';

import React, { useState, useEffect, createContext, useContext, ReactNode } from 'react';
import { 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  User as FirebaseUser
} from 'firebase/auth';
import { doc, setDoc, getDoc, updateDoc } from 'firebase/firestore';
import { auth, db } from '../lib/firebase';

// Type definitions
interface AuthUser extends FirebaseUser {
  role?: string;
  subject?: string;
  experience?: string;
}

interface AdditionalData {
  provider?: string;
  role?: string;
  subject?: string;
  experience?: string;
  [key: string]: string | undefined;
}

interface AuthContextType {
  user: AuthUser | null;
  loading: boolean;
  error: string | null;
  signInWithEmail: (email: string, password: string) => Promise<{ user: AuthUser | null; error: string | null }>;
  signUpWithEmail: (email: string, password: string, additionalData?: AdditionalData) => Promise<{ user: AuthUser | null; error: string | null }>;
  signInWithGoogle: (role?: string) => Promise<{ user: AuthUser | null; error: string | null }>;
  logout: () => Promise<{ error: string | null }>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  error: null,
  signInWithEmail: async () => ({ user: null, error: null }),
  signUpWithEmail: async () => ({ user: null, error: null }),
  signInWithGoogle: async () => ({ user: null, error: null }),
  logout: async () => ({ error: null })
});

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        // Get additional user data from Firestore
        const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
        const userData = userDoc.exists() ? userDoc.data() : {};
        
        setUser({
          ...firebaseUser,
          ...userData
        } as AuthUser);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const createUserProfile = async (user: FirebaseUser, additionalData: AdditionalData = {}) => {
    if (!user) return;
    
    const userRef = doc(db, 'users', user.uid);
    const userSnap = await getDoc(userRef);
    
    if (!userSnap.exists()) {
      const { displayName, email, photoURL } = user;
      const timestamp = new Date();
      
      try {
        await setDoc(userRef, {
          displayName,
          email,
          photoURL,
          emailVerified: user.emailVerified,
          createdAt: timestamp,
          updatedAt: timestamp,
          lastSignIn: timestamp,
          provider: additionalData.provider || 'email',
          role: additionalData.role || 'student',
          ...additionalData
        });
        
        // Create role-specific profile
        if (additionalData.role === 'teacher') {
          await setDoc(doc(db, 'teacher_profiles', user.uid), {
            email,
            role: 'teacher',
            subject: additionalData.subject || '',
            experience: additionalData.experience || '',
            coursesCreated: [],
            studentsTeaching: [],
            createdAt: timestamp,
            ...additionalData
          });
        } else {
          await setDoc(doc(db, 'student_profiles', user.uid), {
            email,
            role: 'student',
            enrolledCourses: [],
            progress: {},
            linkedTeacherUID: null,
            createdAt: timestamp,
            ...additionalData
          });
        }
      } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
        console.error('Error creating user profile:', error);
        throw new Error(errorMessage);
      }
    } else {
      // Update last sign in
      await updateDoc(userRef, {
        lastSignIn: new Date()
      });
    }
  };

  const signInWithEmail = async (email: string, password: string) => {
    try {
      setError(null);
      const result = await signInWithEmailAndPassword(auth, email, password);
      await createUserProfile(result.user, { provider: 'email' });
      return { user: result.user as AuthUser, error: null };
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      setError(errorMessage);
      return { user: null, error: errorMessage };
    }
  };

  const signUpWithEmail = async (email: string, password: string, additionalData: AdditionalData = {}) => {
    try {
      setError(null);
      const result = await createUserWithEmailAndPassword(auth, email, password);
      await createUserProfile(result.user, { 
        provider: 'email',
        ...additionalData
      });
      return { user: result.user as AuthUser, error: null };
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      setError(errorMessage);
      return { user: null, error: errorMessage };
    }
  };

  const signInWithGoogle = async (role: string = 'student') => {
    try {
      setError(null);
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      await createUserProfile(result.user, { 
        provider: 'google',
        role 
      });
      return { user: result.user as AuthUser, error: null };
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      setError(errorMessage);
      return { user: null, error: errorMessage };
    }
  };

  const logout = async () => {
    try {
      setError(null);
      await signOut(auth);
      return { error: null };
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      setError(errorMessage);
      return { error: errorMessage };
    }
  };

  const value: AuthContextType = {
    user,
    loading,
    error,
    signInWithEmail,
    signUpWithEmail,
    signInWithGoogle,
    logout
  };

  return React.createElement(AuthContext.Provider, { value }, children);
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default useAuth;