'use client';

import React from 'react';
import Link from 'next/link';
import Button from '../../components/Button';
import LottiePlayer from '../../components/LottiePlayer';
import Navbar from '../../components/layout/Navbar';
import { useAuth } from '../../hooks/useAuth';
import { animationPresets } from '../../utils/animations';
import { 
  AcademicCapIcon, 
  ChartBarIcon, 
  TrophyIcon,
  BookOpenIcon,
  UserIcon,
  Cog6ToothIcon,
  QuestionMarkCircleIcon,
  ArrowRightOnRectangleIcon
} from '@heroicons/react/24/outline';

export default function StudentDashboard() {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  // Mock data - in real app, this would come from API/Firestore
  const studentStats = {
    coursesEnrolled: 0,
    progress: 0,
    certificates: 0
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Welcome Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Welcome to Your 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}Learning Hub
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Ready to continue your learning journey, {user?.displayName || user?.email || 'Learner'}?
            </p>
          </div>

          {/* Main Dashboard Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content - Takes 2 columns */}
            <div className="lg:col-span-2 space-y-8">
              {/* Profile Card */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-6 mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                    {user?.photoURL ? (
                      <img 
                        src={user.photoURL} 
                        alt="Profile" 
                        className="w-full h-full rounded-full object-cover"
                      />
                    ) : (
                      <span className="text-2xl font-bold text-white">
                        {(user?.displayName || user?.email || 'S')[0].toUpperCase()}
                      </span>
                    )}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {user?.displayName || 'Student'}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">{user?.email}</p>
                    <span className="inline-block mt-2 px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-full">
                      Student
                    </span>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-3 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center">
                      <AcademicCapIcon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      {studentStats.coursesEnrolled}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Courses Enrolled
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-3 bg-green-100 dark:bg-green-900 rounded-xl flex items-center justify-center">
                      <ChartBarIcon className="w-8 h-8 text-green-600 dark:text-green-400" />
                    </div>
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                      {studentStats.progress}%
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Progress
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-3 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center">
                      <TrophyIcon className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                      {studentStats.certificates}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Certificates
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  Quick Actions
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Button 
                    variant="gradient" 
                    size="lg"
                    className="flex items-center justify-center space-x-2"
                    onClick={() => {}}
                  >
                    <BookOpenIcon className="w-5 h-5" />
                    <span>Browse Courses</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="flex items-center justify-center space-x-2"
                    onClick={() => {}}
                  >
                    <UserIcon className="w-5 h-5" />
                    <span>Edit Profile</span>
                  </Button>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  Recent Activity
                </h3>
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
                    <BookOpenIcon className="w-8 h-8 text-gray-400" />
                  </div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                    No Courses Yet
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Start your learning journey by enrolling in your first course.
                  </p>
                  <Button variant="gradient" onClick={() => {}}>
                    Browse Courses
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-8">
              {/* Motivation Card */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-200 dark:border-gray-700">
                <div className="text-center space-y-4">
                  <LottiePlayer
                    {...animationPresets.dashboard.student}
                    className="mx-auto"
                    fallback={
                      <div className="w-48 h-48 mx-auto bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-xl flex items-center justify-center">
                        <div className="text-center space-y-2">
                          <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                            <AcademicCapIcon className="w-8 h-8 text-white" />
                          </div>
                          <p className="text-gray-600 dark:text-gray-300 font-medium">Learning Excellence</p>
                        </div>
                      </div>
                    }
                  />
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                      Keep Learning!
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Every step you take brings you closer to your goals. Keep pushing forward!
                    </p>
                  </div>
                </div>
              </div>

              {/* Account Actions */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-200 dark:border-gray-700">
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  Account
                </h4>
                <div className="space-y-3">
                  <button className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
                    <Cog6ToothIcon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    <span className="text-gray-700 dark:text-gray-300">Settings</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
                    <QuestionMarkCircleIcon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    <span className="text-gray-700 dark:text-gray-300">Help & Support</span>
                  </button>
                  <button 
                    onClick={handleLogout}
                    className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors duration-200 text-red-600 dark:text-red-400"
                  >
                    <ArrowRightOnRectangleIcon className="w-5 h-5" />
                    <span>Sign Out</span>
                  </button>
                </div>
              </div>

              {/* Teacher Portal Link */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl p-6 text-white">
                <h4 className="text-lg font-bold mb-2">
                  Become a Teacher
                </h4>
                <p className="text-blue-100 text-sm mb-4">
                  Share your knowledge and help others learn
                </p>
                <Link href="/teacher">
                  <Button variant="secondary" size="sm" className="w-full" onClick={() => {}}>
                    Explore Teaching
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
