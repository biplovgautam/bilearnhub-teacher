'use client';

import React from 'react';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  loading = false,
  onClick = () => {},
  type = 'button',
  icon = null,
  ...props
}) => {
  const variants = {
    primary: 'bg-accent text-white hover:bg-accent/90 focus:ring-accent/50 shadow-lg hover:shadow-glow',
    secondary: 'bg-primary text-text border border-secondary hover:bg-secondary/10 focus:ring-secondary/50',
    accent: 'bg-accent text-white hover:bg-accent/90 focus:ring-accent/50 glow-accent',
    ghost: 'text-text hover:bg-primary/50 focus:ring-secondary/30',
    outline: 'border-2 border-accent text-accent hover:bg-accent hover:text-white focus:ring-accent/50',
    danger: 'bg-red-600 hover:bg-red-700 text-white focus:ring-red-500/50',
    gradient: 'bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-white shadow-lg hover:shadow-glow-lg',
    glass: 'card-glass text-text hover:bg-primary/80 backdrop-blur-md'
  };

  const sizes = {
    xs: 'px-2 py-1 text-xs',
    sm: 'px-3 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-12 py-5 text-xl'
  };

  const baseClasses = 'font-semibold rounded-xl transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden';

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className} ${loading ? 'cursor-wait' : ''}`;

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-inherit">
          <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      
      <div className={`flex items-center justify-center space-x-2 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        {icon && <span className="flex-shrink-0">{icon}</span>}
        <span>{children}</span>
      </div>
      
      {/* Ripple effect overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
    </button>
  );
};

export default Button;
