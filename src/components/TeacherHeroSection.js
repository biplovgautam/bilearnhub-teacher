'use client';

import React from 'react';
import Link from 'next/link';
import Button from './Button';
import LottiePlayer from './LottiePlayer';
import { animationPresets } from '../utils/animations';
import { CheckIcon } from '@heroicons/react/24/outline';

const TeacherHeroSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Main Hero Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Empower Students,
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Create Impact
                </span>
                <br />
                <span className="text-gray-900 dark:text-white">
                  Teach with BiLearnHub
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl">
                Join thousands of educators creating engaging courses and inspiring the next generation
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/teacher/login">
                <Button 
                  variant="gradient" 
                  size="xl"
                  className="w-full sm:w-auto drop-shadow-2xl"
                >
                  Start Teaching
                </Button>
              </Link>
              <Link href="/">
                <Button 
                  variant="outline" 
                  size="xl"
                  className="w-full sm:w-auto"
                >
                  View Student App
                </Button>
              </Link>
            </div>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-4 mt-12">
              {[
                '100% Free & Open Source',
                'Interactive Course Creation',
                'Student Management Tools',
                'Real-time Analytics'
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <CheckIcon className="h-6 w-6 text-green-500" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Animation Section */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-lg">
              <LottiePlayer
                {...animationPresets.hero.teacher}
                className="drop-shadow-2xl"
                fallback={
                  <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-2xl flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="w-24 h-24 mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 font-medium">Teaching Excellence</p>
                    </div>
                  </div>
                }
              />
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-24 pt-16 border-t border-gray-200 dark:border-gray-700">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                10,000+
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                Teachers
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                50,000+
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                Students Taught
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                95%
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                Success Rate
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                24/7
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                Platform Access
              </div>
            </div>
          </div>
        </div>

        {/* Features Highlight Section */}
        <div className="mt-24">
          <div className="text-center space-y-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Everything You Need to
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}Teach Excellence
              </span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Course Creation</h3>
                <p className="text-gray-600 dark:text-gray-400">Build engaging courses with our intuitive tools and templates</p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Student Management</h3>
                <p className="text-gray-600 dark:text-gray-400">Track progress and manage your students effortlessly</p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Analytics</h3>
                <p className="text-gray-600 dark:text-gray-400">Get insights into student performance and engagement</p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Flexible Scheduling</h3>
                <p className="text-gray-600 dark:text-gray-400">Teach on your own schedule with flexible timing options</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherHeroSection;
