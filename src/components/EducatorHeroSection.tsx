'use client';

import React from 'react';
import Link from 'next/link';
import Button from './Button';
import LottiePlayer from './LottiePlayer';
import { animationPresets } from '../utils/animations';
import { CheckIcon, SparklesIcon, AcademicCapIcon, UserGroupIcon, ChartBarIcon, ClockIcon, ArrowRightIcon, PlayIcon } from '@heroicons/react/24/outline';

const EducatorHeroSection = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-accent/5 rounded-full blur-2xl animate-pulse delay-2000" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full" style={{
          backgroundImage: `radial-gradient(circle, var(--secondary) 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }} />
      </div>

      {/* Hero Section */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content Section */}
            <div className="text-center lg:text-left space-y-10">
              <div className="space-y-8">
                {/* Badge */}
                <div className="inline-flex items-center px-6 py-3 bg-primary rounded-full border border-accent/20 shadow-lg">
                  <SparklesIcon className="w-5 h-5 mr-3 text-accent" />
                  <span className="text-accent font-bold">Join 15,000+ Educators Worldwide</span>
                  <div className="ml-3 w-2 h-2 bg-accent rounded-full animate-pulse" />
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight">
                  <span className="text-text">Transform</span>
                  <br />
                  <span className="bg-gradient-to-r from-accent via-accent/80 to-accent bg-clip-text text-transparent relative">
                    Tomorrow&apos;s Minds
                    <div className="absolute -bottom-4 left-0 w-full h-2 bg-gradient-to-r from-accent/30 to-transparent rounded-full" />
                  </span>
                  <br />
                  <span className="text-text">Today</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-secondary max-w-2xl leading-relaxed">
                  Empower the next generation with cutting-edge tools, AI-powered insights, and a global community of educators on <span className="text-accent font-semibold">BiLearnHub</span>
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                <Link href="/login">
                  <Button 
                    variant="gradient"
                    size="xl"
                    className="w-full sm:w-auto group"
                  >
                    Start Your Journey
                    <ArrowRightIcon className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
                <Link href="https://bilearnhub.biplovgautam.com.np">
                  <Button 
                    variant="glass" 
                    size="xl"
                    className="w-full sm:w-auto group"
                  >
                    <PlayIcon className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                    Watch Demo
                  </Button>
                </Link>
              </div>

              {/* Features List */}
              <div className="grid sm:grid-cols-2 gap-6 mt-16">
                {[
                  { icon: CheckIcon, text: 'Completely Free Platform', color: 'from-green-400 to-accent' },
                  { icon: SparklesIcon, text: 'AI-Powered Course Tools', color: 'from-accent to-cyan-400' },
                  { icon: UserGroupIcon, text: 'Global Learning Community', color: 'from-purple-400 to-accent' },
                  { icon: ChartBarIcon, text: 'Advanced Analytics', color: 'from-accent to-emerald-400' }
                ].map((feature, index) => (
                  <div key={index} className="group teacher-card">
                    <div className="flex items-center space-x-4 p-4 rounded-xl bg-primary/90 backdrop-blur-sm border border-secondary/20 shadow-lg hover:shadow-glow-lg transition-all duration-500">
                      <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <feature.icon className="h-6 w-6 text-white" />
                      </div>
                      <span className="text-text font-semibold group-hover:text-accent transition-colors duration-300">
                        {feature.text}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Animation Section */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent/10 rounded-3xl blur-2xl animate-pulse" />
                <div className="relative card-glass rounded-3xl p-8 shadow-2xl border border-accent/20">
                  <LottiePlayer
                    {...animationPresets.hero.teacher}
                    className="drop-shadow-2xl float-animation"
                    fallback={
                      <div className="w-full h-96 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center shadow-inner">
                        <div className="text-center space-y-6">
                          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center shadow-2xl">
                            <AcademicCapIcon className="w-16 h-16 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-text">Educational Excellence</h3>
                            <p className="text-secondary text-lg">Transforming Lives Through Learning</p>
                          </div>
                        </div>
                      </div>
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative bg-primary/10 backdrop-blur-xl border-y border-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '15,000+', label: 'Active Educators', icon: UserGroupIcon },
              { number: '250,000+', label: 'Lives Transformed', icon: AcademicCapIcon },
              { number: '98%', label: 'Success Rate', icon: ChartBarIcon },
              { number: '24/7', label: 'Global Access', icon: ClockIcon }
            ].map((stat, index) => (
              <div key={index} className="group space-y-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-glow transition-all duration-500 group-hover:scale-110">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-secondary font-semibold text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Showcase */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center space-y-20">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-text leading-tight">
              Everything You Need to
              <span className="bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
                {" "}Educate Excellence
              </span>
            </h2>
            <p className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
              Comprehensive tools and insights to create transformative learning experiences that inspire and engage
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: AcademicCapIcon,
                title: 'Smart Course Builder',
                description: 'AI-assisted content creation with interactive elements and multimedia support'
              },
              {
                icon: UserGroupIcon,
                title: 'Student Success Hub',
                description: 'Track progress, engagement, and provide personalized feedback at scale'
              },
              {
                icon: ChartBarIcon,
                title: 'Advanced Analytics',
                description: 'Deep insights into learning patterns and course performance metrics'
              },
              {
                icon: ClockIcon,
                title: 'Flexible Teaching',
                description: 'Teach on your schedule with asynchronous and live session options'
              }
            ].map((feature, index) => (
              <div key={index} className="group teacher-card">
                <div className="relative bg-primary rounded-2xl p-8 shadow-xl border border-secondary hover:border-accent transition-all duration-500 hover:scale-105 h-full">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-accent to-accent/80 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-glow transition-all duration-500 group-hover:scale-110">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-text mb-4 group-hover:text-accent transition-colors duration-300">{feature.title}</h3>
                    <p className="text-secondary leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="relative bg-gradient-to-r from-accent to-accent/80 rounded-3xl p-12 text-center shadow-2xl overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="h-full w-full" style={{
                backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
                backgroundSize: '20px 20px'
              }} />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Lives Through Education?
              </h3>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join thousands of educators who are already making a difference on BiLearnHub
              </p>
              <Link href="/login">
                <Button 
                  variant="secondary" 
                  size="xl"
                  className="bg-white text-accent hover:bg-primary shadow-xl hover:shadow-2xl group"
                >
                  Begin Your Teaching Journey
                  <ArrowRightIcon className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducatorHeroSection;
