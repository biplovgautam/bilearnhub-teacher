'use client';

import { useState, useEffect, createContext, useContext } from 'react';
import { 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';
import { doc, setDoc, getDoc, updateDoc } from 'firebase/firestore';
import { auth, db } from '../lib/firebase';

const AuthContext = createContext({
  user: null,
  loading: true,
  error: null,
  signInWithEmail: async () => ({ user: null, error: null }),
  signUpWithEmail: async () => ({ user: null, error: null }),
  signInWithGoogle: async () => ({ user: null, error: null }),
  logout: async () => ({ error: null })
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        // Get additional user data from Firestore
        const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
        const userData = userDoc.exists() ? userDoc.data() : {};
        
        setUser({
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          displayName: firebaseUser.displayName,
          photoURL: firebaseUser.photoURL,
          emailVerified: firebaseUser.emailVerified,
          ...userData
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const createUserProfile = async (user, additionalData = {}) => {
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
      } catch (error) {
        console.error('Error creating user profile:', error);
        throw error;
      }
    } else {
      // Update last sign in
      await updateDoc(userRef, {
        lastSignIn: new Date()
      });
    }
  };

  const signInWithEmail = async (email, password) => {
    try {
      setError(null);
      const result = await signInWithEmailAndPassword(auth, email, password);
      await createUserProfile(result.user, { provider: 'email' });
      return { user: result.user, error: null };
    } catch (error) {
      setError(error.message);
      return { user: null, error: error.message };
    }
  };

  const signUpWithEmail = async (email, password, additionalData = {}) => {
    try {
      setError(null);
      const result = await createUserWithEmailAndPassword(auth, email, password);
      await createUserProfile(result.user, { 
        provider: 'email',
        ...additionalData
      });
      return { user: result.user, error: null };
    } catch (error) {
      setError(error.message);
      return { user: null, error: error.message };
    }
  };

  const signInWithGoogle = async (role = 'student') => {
    try {
      setError(null);
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      await createUserProfile(result.user, { 
        provider: 'google',
        role 
      });
      return { user: result.user, error: null };
    } catch (error) {
      setError(error.message);
      return { user: null, error: error.message };
    }
  };

  const logout = async () => {
    try {
      setError(null);
      await signOut(auth);
      return { error: null };
    } catch (error) {
      setError(error.message);
      return { error: error.message };
    }
  };

  const value = {
    user,
    loading,
    error,
    signInWithEmail,
    signUpWithEmail,
    signInWithGoogle,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default useAuth;
