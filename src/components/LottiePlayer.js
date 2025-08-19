'use client';

import React, { useEffect, useRef, useState } from 'react';

const LottiePlayer = ({
  src,
  autoplay = true,
  loop = true,
  speed = 1,
  style = {},
  className = '',
  fallback,
}) => {
  const containerRef = useRef(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let animationInstance = null;

    const loadLottie = async () => {
      try {
        // Dynamic import of lottie-web
        const lottie = (await import('lottie-web')).default;
        
        if (containerRef.current) {
          animationInstance = lottie.loadAnimation({
            container: containerRef.current,
            renderer: 'svg',
            loop,
            autoplay,
            path: src,
          });

          if (speed !== 1) {
            animationInstance.setSpeed(speed);
          }

          animationInstance.addEventListener('data_failed', () => {
            setHasError(true);
          });
        }
      } catch (error) {
        console.error('Failed to load Lottie animation:', error);
        setHasError(true);
      }
    };

    loadLottie();

    return () => {
      if (animationInstance) {
        animationInstance.destroy();
      }
    };
  }, [src, autoplay, loop, speed]);

  if (hasError) {
    return (
      fallback || (
        <div 
          className={`flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg ${className}`}
          style={{ width: 300, height: 300, ...style }}
        >
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m0 0V1a1 1 0 011-1h2a1 1 0 011 1v18a1 1 0 01-1 1H5a1 1 0 01-1-1V1a1 1 0 011-1h2a1 1 0 011 1v3m0 0h8m-8 0V1" />
              </svg>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Animation unavailable</p>
          </div>
        </div>
      )
    );
  }

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ width: 300, height: 300, ...style }}
    />
  );
};

export default LottiePlayer;
