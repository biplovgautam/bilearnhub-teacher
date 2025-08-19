# BiLearnHub Teacher Portal

A Next.js 15.4.6 teacher application with Firebase authentication, designed to mirror the student app structure with teacher-specific content and functionality.

## Features

### 🎯 Teacher-Focused Pages
- **Teacher Hero Page** (`/teacher`) - Dedicated landing page for educators
- **Teacher Authentication** (`/teacher/login`) - Role-based login/signup with teacher fields
- **Teacher Dashboard** (`/teacher/dashboard`) - Course management and analytics

### 🎨 Design & UX
- Identical design patterns to student app
- Same Tailwind CSS styling and animations
- Consistent component library and theme system
- Dark/light mode support with next-themes
- Responsive design for all devices

### 🔐 Authentication
- Firebase Auth integration with role-based access
- Teacher-specific signup fields (Subject, Experience)
- Google OAuth support with role assignment
- Secure role-based routing and redirects

### 🧩 Shared Components
- Reusable Button, Input, LottiePlayer components
- Consistent Navbar with theme toggle
- Animation presets for different contexts
- Same design system as student app

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Configure Firebase**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your Firebase config
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```

4. **Access the App**
   - Student Portal: [http://localhost:3000](http://localhost:3000)
   - Teacher Portal: [http://localhost:3000/teacher](http://localhost:3000/teacher)

## Project Structure

```
src/
├── app/
│   ├── page.tsx                 # Student hero page
│   ├── login/page.tsx          # Student authentication
│   ├── dashboard/page.tsx      # Student dashboard
│   └── teacher/
│       ├── page.tsx            # Teacher hero page
│       ├── login/page.tsx      # Teacher authentication
│       └── dashboard/page.tsx  # Teacher dashboard
├── components/
│   ├── Button.js               # Reusable button component
│   ├── Input.js               # Form input component
│   ├── LottiePlayer.js        # Animation player
│   ├── HeroSection.js         # Student hero section
│   ├── TeacherHeroSection.js  # Teacher hero section
│   └── layout/
│       └── Navbar.js          # Navigation component
├── hooks/
│   └── useAuth.js             # Firebase auth hook
├── lib/
│   └── firebase.js            # Firebase configuration
└── utils/
    └── animations.js          # Lottie animation presets
```

## Authentication Flow

### Student Registration
- Role: `student`
- Creates document in `users` and `student_profiles` collections
- Redirects to `/dashboard`

### Teacher Registration
- Role: `teacher`
- Additional fields: Subject expertise, Experience level
- Creates document in `users` and `teacher_profiles` collections
- Redirects to `/teacher/dashboard`

## Firebase Collections

### Users Collection
```javascript
{
  email: string,
  displayName: string,
  role: 'student' | 'teacher',
  provider: 'email' | 'google',
  createdAt: timestamp,
  // ... other fields
}
```

### Teacher Profiles
```javascript
{
  email: string,
  role: 'teacher',
  subject: string,
  experience: string,
  coursesCreated: array,
  studentsTeaching: array,
  // ... other fields
}
```

### Student Profiles  
```javascript
{
  email: string,
  role: 'student',
  enrolledCourses: array,
  progress: object,
  linkedTeacherUID: string,
  // ... other fields
}
```

## Key Features by Role

### For Teachers
- **Course Creation Tools** - Build and manage educational content
- **Student Management** - Track student progress and engagement
- **Analytics Dashboard** - View teaching metrics and course performance
- **Flexible Scheduling** - Teach on your own schedule

### For Students
- **Course Discovery** - Browse and enroll in courses
- **Progress Tracking** - Monitor learning achievements
- **Interactive Learning** - Engage with educational content
- **Community Access** - Connect with other learners

## Navigation Between Apps

- Students can access teacher portal via "Become a Teacher" link
- Teachers can view student experience via "View Student App" link
- Cross-navigation maintains consistent user experience

## Technology Stack

- **Framework**: Next.js 15.4.6 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Authentication**: Firebase Auth
- **Database**: Cloud Firestore
- **Animations**: Lottie Web
- **Theme**: next-themes
- **Icons**: Heroicons

## Contributing

This teacher app is designed to perfectly mirror the student app structure while providing teacher-specific functionality. When making changes:

1. Maintain design consistency with student app
2. Use the same component patterns and styling
3. Follow the established authentication flow
4. Test both student and teacher user journeys

## License

This project follows the same license as the main BiLearnHub project.
