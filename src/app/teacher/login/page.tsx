'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import LottiePlayer from '../../../components/LottiePlayer';
import Navbar from '../../../components/layout/Navbar';
import { useAuth } from '../../../hooks/useAuth';
import { animationPresets } from '../../../utils/animations';

export default function TeacherLogin() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [subject, setSubject] = useState('');
  const [experience, setExperience] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const { signInWithEmail, signUpWithEmail, signInWithGoogle } = useAuth();
  const router = useRouter();

  const subjects = [
    'Mathematics',
    'Science',
    'English',
    'History',
    'Art',
    'Music',
    'Physical Education',
    'Computer Science',
    'Languages',
    'Social Studies',
    'Other'
  ];

  const experienceLevels = [
    'New Teacher',
    '1-3 years',
    '3-5 years',
    '5-10 years',
    '10+ years'
  ];

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
    setError('');
    setPassword('');
    setConfirmPassword('');
    setSubject('');
    setExperience('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (isSignUp) {
      if (password !== confirmPassword) {
        setError('Passwords do not match');
        setLoading(false);
        return;
      }
      
      if (!subject || !experience) {
        setError('Please fill in all required fields');
        setLoading(false);
        return;
      }

      const { user, error } = await signUpWithEmail(email, password, {
        role: 'teacher',
        subject,
        experience
      });
      
      if (error) {
        setError(error);
      } else if (user) {
        router.push('/teacher/dashboard');
      }
    } else {
      const { user, error } = await signInWithEmail(email, password);
      
      if (error) {
        setError(error);
      } else if (user) {
        router.push('/teacher/dashboard');
      }
    }
    
    setLoading(false);
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    const { user, error } = await signInWithGoogle('teacher');
    
    if (error) {
      setError(error);
    } else if (user) {
      router.push('/teacher/dashboard');
    }
    
    setLoading(false);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
            {/* Animation Section - Order changes based on signup/login */}
            <div className={`flex justify-center ${isSignUp ? 'lg:order-2' : 'lg:order-1'}`}>
              <div className="w-full max-w-md space-y-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {isSignUp ? 'Join Our Teaching Community' : 'Welcome Back, Educator'}
                  </h2>
                  <p className="mt-4 text-gray-600 dark:text-gray-400">
                    {isSignUp 
                      ? 'Start your journey as an educator and inspire minds'
                      : 'Continue your mission to educate and inspire'
                    }
                  </p>
                </div>
                
                <LottiePlayer
                  {...(isSignUp ? animationPresets.auth.signup : animationPresets.auth.login)}
                  className="animate-fade-in"
                  fallback={
                    <div className="w-full h-80 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-2xl flex items-center justify-center">
                      <div className="text-center space-y-4">
                        <div className="w-20 h-20 mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 font-medium">
                          {isSignUp ? 'Teaching Excellence' : 'Welcome Back'}
                        </p>
                      </div>
                    </div>
                  }
                />
              </div>
            </div>

            {/* Form Section - Order changes based on signup/login */}
            <div className={`${isSignUp ? 'lg:order-1' : 'lg:order-2'}`}>
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-gray-200/50 dark:border-gray-700/50">
                <div className="space-y-6">
                  <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Teacher Portal - {isSignUp ? 'Create Account' : 'Sign In'}
                    </h1>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                      {isSignUp ? 'Create your teacher account' : 'Access your teaching dashboard'}
                    </p>
                  </div>

                  {error && (
                    <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 animate-slide-fade">
                      <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <Input
                      label="Teacher Email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />

                    <Input
                      label="Password"
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      showPasswordToggle
                      required
                    />

                    {isSignUp && (
                      <div className="space-y-6 animate-slide-fade">
                        <Input
                          label="Confirm Password"
                          type="password"
                          placeholder="Confirm your password"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          showPasswordToggle
                          required
                        />

                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Subject/Expertise <span className="text-red-500">*</span>
                          </label>
                          <select
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                            required
                          >
                            <option value="">Select your subject</option>
                            {subjects.map((subj) => (
                              <option key={subj} value={subj}>{subj}</option>
                            ))}
                          </select>
                        </div>

                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Experience Level <span className="text-red-500">*</span>
                          </label>
                          <select
                            value={experience}
                            onChange={(e) => setExperience(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                            required
                          >
                            <option value="">Select your experience level</option>
                            {experienceLevels.map((exp) => (
                              <option key={exp} value={exp}>{exp}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    )}

                    <Button
                      type="submit"
                      variant="gradient"
                      size="lg"
                      className="w-full"
                      disabled={loading}
                    >
                      {loading ? 'Please wait...' : (isSignUp ? 'Start Teaching' : 'Sign In')}
                    </Button>
                  </form>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300 dark:border-gray-600" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                        Or continue with
                      </span>
                    </div>
                  </div>

                  <Button
                    onClick={handleGoogleSignIn}
                    variant="outline"
                    size="lg"
                    className="w-full"
                    disabled={loading}
                  >
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    Google
                  </Button>

                  <div className="text-center space-y-4">
                    <button
                      type="button"
                      onClick={toggleMode}
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors duration-200"
                    >
                      {isSignUp 
                        ? 'Already have an account? Sign in' 
                        : "Don't have an account? Create one"
                      }
                    </button>
                    
                    <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                      <Link 
                        href="/login"
                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                      >
                        Are you a student? Go to Student Portal →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-fade {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        
        .animate-slide-fade {
          animation: slide-fade 0.4s ease-out;
        }
      `}</style>
    </>
  );
}
