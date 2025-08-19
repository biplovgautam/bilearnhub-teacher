// Education-themed Lottie animations
export const educationAnimations = {
  // For hero section - learning theme
  learning: 'https://lottie.host/4d9d4f1e-0c5a-4d8b-9c3f-2e1a8b5c7d9f/k3M2n1P4q7.json',
  
  // For teacher hero - teaching theme
  teaching: 'https://lottie.host/8a7b6c5d-4e3f-2a1b-9c8d-7e6f5a4b3c2d/t1E2a3C4h5.json',
  
  // For login page - reading theme  
  reading: 'https://lottie.host/6f5e4d3c-2b1a-9876-5432-1098fedcba21/r1E2a3D4i5.json',
  
  // For signup page - graduation theme
  graduation: 'https://lottie.host/9c8b7a6d-5e4f-3210-9876-543210fedcba/g1R2a3D4u5.json',
  
  // For dashboard - success/achievement theme
  achievement: 'https://lottie.host/1a2b3c4d-5e6f-7890-abcd-ef1234567890/a1C2h3I4e5.json',
  
  // For teacher dashboard - classroom theme
  classroom: 'https://lottie.host/5f4e3d2c-1b0a-9876-5432-fedcba098765/c1L2a3S4s5.json',
  
  // Fallback animation - simple education icon
  fallback: 'https://lottie.host/2b1a9c8d-7e6f-5432-1098-765432109876/f1A2l3L4b5.json'
};

// Animation presets for different contexts
export const animationPresets = {
  hero: {
    student: {
      src: educationAnimations.learning,
      autoplay: true,
      loop: true,
      speed: 1,
      style: { width: '100%', height: 'auto', maxWidth: '500px' }
    },
    teacher: {
      src: educationAnimations.teaching,
      autoplay: true,
      loop: true,
      speed: 1,
      style: { width: '100%', height: 'auto', maxWidth: '500px' }
    }
  },
  auth: {
    login: {
      src: educationAnimations.reading,
      autoplay: true,
      loop: true,
      speed: 0.8,
      style: { width: '100%', height: 'auto', maxWidth: '400px' }
    },
    signup: {
      src: educationAnimations.graduation,
      autoplay: true,
      loop: true,
      speed: 0.8,
      style: { width: '100%', height: 'auto', maxWidth: '400px' }
    }
  },
  dashboard: {
    student: {
      src: educationAnimations.achievement,
      autoplay: true,
      loop: true,
      speed: 1,
      style: { width: '100%', height: 'auto', maxWidth: '300px' }
    },
    teacher: {
      src: educationAnimations.classroom,
      autoplay: true,
      loop: true,
      speed: 1,
      style: { width: '100%', height: 'auto', maxWidth: '300px' }
    }
  }
};

export default educationAnimations;
