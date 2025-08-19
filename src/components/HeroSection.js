'use client';

import React from 'react';
import Link from 'next/link';
import Button from './Button';
import LottiePlayer from './LottiePlayer';
import { animationPresets } from '../utils/animations';
import { CheckIcon } from '@heroicons/react/24/outline';

const HeroSection = () => {
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
                  Learn Without Limits,
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Grow Without Barriers
                </span>
                <br />
                <span className="text-gray-900 dark:text-white">
                  with BiLearnHub
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl">
                Discover your potential with interactive courses, expert guidance, and a supportive learning community
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/login">
                <Button 
                  variant="gradient" 
                  size="xl"
                  className="w-full sm:w-auto drop-shadow-2xl"
                >
                  Start Learning
                </Button>
              </Link>
              <Link href="/teacher">
                <Button 
                  variant="outline" 
                  size="xl"
                  className="w-full sm:w-auto"
                >
                  Become a Teacher
                </Button>
              </Link>
            </div>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-4 mt-12">
              {[
                '100% Free & Open Source',
                'Interactive Learning',
                'Community Driven',
                'Expert Guidance'
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
                {...animationPresets.hero.student}
                className="drop-shadow-2xl"
                fallback={
                  <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-2xl flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="w-24 h-24 mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 font-medium">Learning Excellence</p>
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
                100%
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                Open Source
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                ∞
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                Possibilities
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                0$
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                Cost
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                24/7
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                Available
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
