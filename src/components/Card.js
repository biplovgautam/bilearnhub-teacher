'use client';

import React from 'react';

const Card = ({
  children,
  className = '',
  variant = 'default',
  hover = true,
  padding = 'md',
  ...props
}) => {
  const variants = {
    default: 'bg-primary border-secondary',
    glass: 'card-glass border-secondary/20',
    accent: 'bg-gradient-to-r from-accent/10 to-accent/5 border-accent/20',
    gradient: 'bg-gradient-to-br from-primary to-primary/80 border-secondary',
  };

  const paddings = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-12',
  };

  const hoverClasses = hover ? 'teacher-card hover:scale-[1.02] hover:shadow-glow-lg hover:border-accent' : '';

  const classes = `
    rounded-2xl border shadow-xl transition-all duration-500
    ${variants[variant]}
    ${paddings[padding]}
    ${hoverClasses}
    ${className}
  `;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Card;
