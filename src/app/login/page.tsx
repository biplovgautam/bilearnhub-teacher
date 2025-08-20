'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Button from '../../components/Button';
import Input from '../../components/Input';
import LottiePlayer from '../../components/LottiePlayer';
import Navbar from '../../components/layout/Navbar';
import { useAuth } from '../../hooks/useAuth';
import { animationPresets } from '../../utils/animations';
import { AcademicCapIcon, UserGroupIcon, SparklesIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

export default function EducatorAuth() {
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
    'Mathematics & Statistics',
    'Physics & Engineering', 
    'Chemistry & Biology',
    'Computer Science & AI',
    'Literature & Languages',
    'History & Social Sciences',
    'Arts & Creative Design',
    'Music & Performing Arts',
    'Business & Economics',
    'Psychology & Philosophy',
    'Health & Life Sciences',
    'Environmental Studies',
    'Other Specialization'
  ];

  const experienceLevels = [
    'New Educator (0-1 years)',
    'Early Career (1-3 years)',
    'Experienced (3-7 years)',
    'Senior Educator (7-15 years)',
    'Veteran Educator (15+ years)'
  ];

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
    setError('');
    setPassword('');
    setConfirmPassword('');
    setSubject('');
    setExperience('');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
        role: 'educator',
        subject,
        experience
      });
      
      if (error) {
        setError(error);
      } else if (user) {
        router.push('/dashboard');
      }
    } else {
      const { user, error } = await signInWithEmail(email, password);
      
      if (error) {
        setError(error);
      } else if (user) {
        router.push('/dashboard');
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
      router.push('/dashboard');
    }
    
    setLoading(false);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-accent/5 rounded-full blur-2xl animate-pulse delay-2000" />
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: `radial-gradient(circle, var(--secondary) 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }} />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-8rem)]">
            {/* Animation Section - Order changes based on signup/login */}
            <div className={`flex justify-center ${isSignUp ? 'lg:order-2' : 'lg:order-1'}`}>
              <div className="w-full max-w-lg space-y-10">
                <div className="text-center space-y-6">
                                    <div className="inline-flex items-center px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-medium">
                    <SparklesIcon className="w-4 h-4 mr-2" />
                    {isSignUp ? 'Educator Registration' : 'Educator Portal'}
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                    <span className="bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
                      {isSignUp ? 'Transform Lives' : 'Welcome Back,'}
                    </span>
                    <br />
                    <span className="text-text">
                      {isSignUp ? 'Through Education' : 'Educator'}
                    </span>
                  </h2>
                  
                  <p className="text-xl text-secondary leading-relaxed">
                    {isSignUp 
                      ? 'Join thousands of educators making a global impact through innovative teaching'
                      : 'Continue your mission to inspire and educate the next generation'
                    }
                  </p>
                </div>
                
                <div className="relative">
                  <div className="absolute inset-0 bg-accent rounded-3xl blur-2xl opacity-20 animate-pulse" />
                  <div className="relative bg-primary/20 backdrop-blur-xl rounded-3xl p-8 border border-secondary/20">
                    <LottiePlayer
                      {...(isSignUp ? animationPresets.auth.signup : animationPresets.auth.login)}
                      className="animate-fade-in drop-shadow-2xl"
                      fallback={
                        <div className="w-full h-80 bg-primary rounded-2xl flex items-center justify-center">
                          <div className="text-center space-y-6">
                            <div className="w-24 h-24 mx-auto bg-accent rounded-full flex items-center justify-center shadow-2xl">
                              <AcademicCapIcon className="w-12 h-12 text-background" />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-text">
                                {isSignUp ? 'Educational Excellence' : 'Welcome Back'}
                              </h3>
                              <p className="text-secondary">
                                {isSignUp ? 'Inspiring Future Leaders' : 'Continue Teaching Excellence'}
                              </p>
                            </div>
                          </div>
                        </div>
                      }
                    />
                  </div>
                </div>
                
                {/* Features showcase for signup */}
                {isSignUp && (
                  <div className="grid grid-cols-3 gap-6 text-center">
                    {[
                      { icon: AcademicCapIcon, label: 'Course Creation' },
                      { icon: UserGroupIcon, label: 'Student Success' },
                      { icon: SparklesIcon, label: 'AI-Powered Tools' }
                    ].map((feature, index) => (
                      <div key={index} className="space-y-3">
                        <div className="w-12 h-12 mx-auto bg-accent rounded-xl flex items-center justify-center shadow-lg">
                          <feature.icon className="w-6 h-6 text-background" />
                        </div>
                        <p className="text-sm font-medium text-secondary">{feature.label}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Form Section - Order changes based on signup/login */}
            <div className={`${isSignUp ? 'lg:order-1' : 'lg:order-2'}`}>
              <div className="card-glass rounded-3xl shadow-2xl p-10 border border-secondary/20 backdrop-blur-xl">
                <div className="space-y-8">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-accent to-accent/80 rounded-2xl flex items-center justify-center shadow-lg">
                      <AcademicCapIcon className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-3xl font-bold text-text">
                      Educator Portal
                    </h1>
                    <p className="text-lg text-secondary">
                      {isSignUp ? 'Create your educator account and start inspiring minds' : 'Access your teaching dashboard and continue your impact'}
                    </p>
                  </div>

                  {error && (
                    <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 animate-slide-fade">
                      <p className="text-sm text-red-400 font-medium">{error}</p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <Input
                      label="Teacher Email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                      required
                    />

                    <Input
                      label="Password"
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
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
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}
                          showPasswordToggle
                          required
                        />

                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-text">
                            Subject/Expertise <span className="text-red-500">*</span>
                          </label>
                          <select
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg border border-secondary bg-background text-text focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300"
                            required
                          >
                            <option value="">Select your subject</option>
                            {subjects.map((subj) => (
                              <option key={subj} value={subj}>{subj}</option>
                            ))}
                          </select>
                        </div>

                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-text">
                            Experience Level <span className="text-red-500">*</span>
                          </label>
                          <select
                            value={experience}
                            onChange={(e) => setExperience(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg border border-secondary bg-background text-text focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300"
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
                      className="w-full bg-accent text-background shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
                      disabled={loading}
                    >
                      {loading ? (
                        <div className="flex items-center justify-center space-x-2">
                          <div className="w-5 h-5 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                          <span>Setting up your journey...</span>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center space-x-2">
                          <span>{isSignUp ? 'Begin Your Teaching Journey' : 'Access Your Dashboard'}</span>
                          <ArrowRightIcon className="w-5 h-5" />
                        </div>
                      )}
                    </Button>
                  </form>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-secondary/30" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-4 bg-primary text-secondary font-medium">
                        Or continue with
                      </span>
                    </div>
                  </div>

                  <Button
                    onClick={handleGoogleSignIn}
                    variant="glass"
                    size="lg"
                    className="w-full group"
                    disabled={loading}
                  >
                    <svg className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    Continue with Google
                  </Button>

                  <div className="text-center space-y-6">
                    <button
                      type="button"
                      onClick={toggleMode}
                      className="text-accent hover:text-accent/80 font-semibold transition-all duration-300 text-lg hover:scale-105"
                    >
                      {isSignUp 
                        ? 'Already transforming lives? Sign in here' 
                        : "Ready to inspire minds? Join our educator community"
                      }
                    </button>
                    
                    <div className="pt-6 border-t border-secondary/20">
                      <Link 
                        href="/"
                        className="text-secondary hover:text-accent transition-colors duration-300 font-medium flex items-center justify-center space-x-2 group"
                      >
                        <span>Are you a student? Go to Student Portal</span>
                        <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
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
