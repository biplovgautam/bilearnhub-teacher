'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '../../hooks/useAuth';
import Button from '../../components/Button';
import Navbar from '../../components/layout/Navbar';
import { 
  UserGroupIcon, 
  ChartBarIcon, 
  SparklesIcon,
  PlusIcon,
  ClockIcon,
  TrophyIcon,
  BookOpenIcon,
  VideoCameraIcon,
  DocumentTextIcon,
  BellIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

export default function EducatorDashboard() {
  const { user, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user, router]);

  if (!user) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 mx-auto border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
          <p className="text-secondary">Loading your educator dashboard...</p>
        </div>
      </div>
    );
  }

  const stats = [
    { label: 'Active Courses', value: '8', change: '+2 this month', icon: BookOpenIcon },
    { label: 'Total Students', value: '247', change: '+18 this week', icon: UserGroupIcon },
    { label: 'Course Completion', value: '94%', change: '+5% improvement', icon: TrophyIcon },
    { label: 'Global Reach', value: '12', change: 'Countries reached', icon: GlobeAltIcon }
  ];

  const quickActions = [
    { title: 'Create New Course', description: 'Design your next masterpiece', icon: PlusIcon, href: '#' },
    { title: 'Live Session', description: 'Start teaching right now', icon: VideoCameraIcon, href: '#' },
    { title: 'Student Analytics', description: 'Track learning progress', icon: ChartBarIcon, href: '#' },
    { title: 'Course Library', description: 'Manage your content', icon: DocumentTextIcon, href: '#' }
  ];

  const recentActivity = [
    { type: 'course', title: 'Mathematics Fundamentals', action: 'New enrollment', time: '2 hours ago', students: 5 },
    { type: 'completion', title: 'Physics Mastery', action: 'Course completed', time: '4 hours ago', students: 12 },
    { type: 'feedback', title: 'Chemistry Basics', action: 'New reviews received', time: '6 hours ago', students: 8 },
    { type: 'milestone', title: 'AI & Machine Learning', action: 'Milestone reached', time: '1 day ago', students: 25 }
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background relative overflow-hidden">
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-background to-accent/10" />
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gradient-to-r from-accent/20 to-transparent rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-gradient-to-l from-accent/15 to-transparent rounded-full blur-3xl animate-float animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-accent/5 rounded-full blur-2xl animate-pulse" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          {/* Enhanced Welcome Header */}
          <div className="mb-12 group">
            <div className="card-glass p-8 rounded-3xl border border-secondary/20 shadow-2xl backdrop-blur-xl hover:shadow-accent/20 transition-all duration-500">
              <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
                <div className="space-y-4">
                  <div className="inline-flex items-center px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-accent text-sm font-medium backdrop-blur-sm hover:bg-accent/20 transition-all duration-300">
                    <SparklesIcon className="w-4 h-4 mr-2 animate-pulse" />
                    Educator Dashboard
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold">
                    <span className="bg-gradient-to-r from-accent via-accent/90 to-accent/70 bg-clip-text text-transparent animate-glow">
                      Welcome back,
                    </span>
                    <br />
                    <span className="text-text group-hover:text-accent transition-colors duration-500">
                      {user.displayName || user.email?.split('@')[0] || 'Educator'}!
                    </span>
                  </h1>
                  <p className="text-xl text-secondary group-hover:text-text transition-colors duration-300">
                    Continue inspiring minds and transforming lives through education
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    variant="gradient"
                    size="lg"
                    className="bg-gradient-to-r from-accent to-accent/80 text-background shadow-xl hover:shadow-2xl hover:shadow-accent/25 transition-all duration-300 hover:scale-105 group"
                  >
                    <PlusIcon className="w-5 h-5 mr-2 group-hover:rotate-90 transition-transform duration-300" />
                    Create Course
                  </Button>
                  <Button 
                    variant="glass"
                    size="lg"
                    className="border-2 border-secondary/30 text-secondary hover:text-accent hover:border-accent/50 backdrop-blur-sm"
                  >
                    <BellIcon className="w-5 h-5 mr-2" />
                    Notifications
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-accent/20 rounded-2xl blur-xl group-hover:blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="relative card-glass rounded-2xl p-6 shadow-xl border border-secondary/20 hover:border-accent/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-accent/10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-accent to-accent/80 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-accent/30 group-hover:scale-110 transition-all duration-300">
                      <stat.icon className="w-6 h-6 text-background" />
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-text group-hover:text-accent transition-colors duration-300 font-mono">
                        {stat.value}
                      </div>
                      <div className="text-sm text-secondary group-hover:text-text transition-colors duration-300">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                  <div className="text-sm text-accent font-medium flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse" />
                    {stat.change}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Enhanced Quick Actions */}
            <div className="lg:col-span-1">
              <div className="card-glass rounded-2xl p-6 shadow-xl border border-secondary/20 h-fit backdrop-blur-xl hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500">
                <h2 className="text-xl font-bold text-text mb-6 flex items-center group">
                  <SparklesIcon className="w-6 h-6 mr-3 text-accent group-hover:rotate-12 transition-transform duration-300" />
                  Quick Actions
                </h2>
                <div className="space-y-4">
                  {quickActions.map((action, index) => (
                    <Link key={index} href={action.href}>
                      <div className="group p-4 rounded-xl bg-secondary/10 hover:bg-accent/10 hover:bg-gradient-to-r hover:from-accent/10 hover:to-accent/5 transition-all duration-300 cursor-pointer border border-transparent hover:border-accent/20 hover:shadow-lg backdrop-blur-sm">
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-gradient-to-r from-accent to-accent/80 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                            <action.icon className="w-5 h-5 text-background group-hover:scale-110 transition-transform duration-200" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-text group-hover:text-accent transition-colors duration-300">
                              {action.title}
                            </h3>
                            <p className="text-sm text-secondary group-hover:text-text transition-colors duration-300">
                              {action.description}
                            </p>
                          </div>
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Enhanced Recent Activity & Analytics */}
            <div className="lg:col-span-2 space-y-8">
              {/* Enhanced Recent Activity */}
              <div className="card-glass rounded-2xl p-6 shadow-xl border border-secondary/20 backdrop-blur-xl hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500">
                <h2 className="text-xl font-bold text-text mb-6 flex items-center group">
                  <ClockIcon className="w-6 h-6 mr-3 text-accent group-hover:rotate-12 transition-transform duration-300" />
                  Recent Activity
                </h2>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="group flex items-center space-x-4 p-4 rounded-xl bg-secondary/10 hover:bg-accent/10 hover:bg-gradient-to-r hover:from-accent/10 hover:to-accent/5 transition-all duration-300 border border-transparent hover:border-accent/20 cursor-pointer">
                      <div className="relative">
                        <div className="w-3 h-3 bg-accent rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                        <div className="absolute inset-0 w-3 h-3 bg-accent rounded-full animate-ping opacity-75"></div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium text-text group-hover:text-accent transition-colors duration-300">
                            {activity.title}
                          </h3>
                          <span className="text-sm text-secondary group-hover:text-text transition-colors duration-300">
                            {activity.time}
                          </span>
                        </div>
                        <p className="text-sm text-secondary group-hover:text-text transition-colors duration-300">
                          {activity.action} • {activity.students} students
                        </p>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enhanced Course Performance */}
              <div className="card-glass rounded-2xl p-6 shadow-xl border border-secondary/20 backdrop-blur-xl hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-text flex items-center group">
                    <ChartBarIcon className="w-6 h-6 mr-3 text-accent group-hover:scale-110 transition-transform duration-300" />
                    Course Performance
                  </h2>
                  <Button 
                    variant="glass" 
                    size="sm" 
                    className="border-secondary/30 text-secondary hover:text-accent hover:border-accent/50 backdrop-blur-sm"
                  >
                    View All Analytics
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="group text-center p-6 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 cursor-pointer">
                    <div className="text-3xl font-bold text-accent group-hover:scale-110 transition-transform duration-300 font-mono">
                      156
                    </div>
                    <div className="text-sm text-secondary group-hover:text-text transition-colors duration-300 font-medium">
                      Hours Taught
                    </div>
                  </div>
                  <div className="group text-center p-6 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 cursor-pointer">
                    <div className="text-3xl font-bold text-accent group-hover:scale-110 transition-transform duration-300 font-mono">
                      4.9
                    </div>
                    <div className="text-sm text-secondary group-hover:text-text transition-colors duration-300 font-medium">
                      Avg Rating
                    </div>
                  </div>
                  <div className="group text-center p-6 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 cursor-pointer">
                    <div className="text-3xl font-bold text-accent group-hover:scale-110 transition-transform duration-300 font-mono">
                      89%
                    </div>
                    <div className="text-sm text-secondary group-hover:text-text transition-colors duration-300 font-medium">
                      Engagement
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Sign Out Section */}
          <div className="mt-12 text-center">
            <Button
              onClick={logout}
              variant="glass"
              className="text-red-400 border-red-400/30 hover:text-red-300 hover:border-red-300/50 hover:bg-red-400/10 backdrop-blur-sm transition-all duration-300"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Sign Out
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}