'use client';

import React, { useState } from 'react';
import { EyeIcon, EyeSlashIcon, ExclamationCircleIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

const Input = ({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  error = null,
  success = false,
  disabled = false,
  required = false,
  showPasswordToggle = false,
  className = '',
  icon = null,
  hint = null,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const inputType = showPasswordToggle && showPassword ? 'text' : type;

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const inputClasses = `
    w-full px-4 py-3 bg-primary border rounded-xl text-text placeholder-secondary/60
    focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300
    disabled:opacity-50 disabled:cursor-not-allowed
    ${error 
      ? 'border-red-500 focus:ring-red-500/50' 
      : success 
        ? 'border-accent focus:ring-accent/50' 
        : 'border-secondary focus:ring-accent/50 hover:border-accent/50'
    }
    ${icon ? 'pl-12' : ''}
    ${(showPasswordToggle || error || success) ? 'pr-12' : ''}
  `;

  const labelClasses = `
    block text-sm font-semibold mb-2 transition-colors duration-300
    ${error ? 'text-red-500' : success ? 'text-accent' : 'text-text'}
    ${required ? "after:content-['*'] after:ml-1 after:text-red-500" : ''}
  `;

  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <label className={labelClasses}>
          {label}
        </label>
      )}
      
      <div className="relative group">
        {/* Icon */}
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
            <div className={`w-5 h-5 transition-colors duration-300 ${
              error ? 'text-red-500' : success ? 'text-accent' : 'text-secondary group-focus-within:text-accent'
            }`}>
              {icon}
            </div>
          </div>
        )}

        {/* Input Field */}
        <input
          type={inputType}
          className={inputClasses}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          disabled={disabled}
          required={required}
          {...props}
        />

        {/* Password Toggle / Status Icons */}
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
          {showPasswordToggle && (
            <button
              type="button"
              className="text-secondary hover:text-accent transition-colors duration-300 focus:outline-none"
              onClick={handleTogglePassword}
            >
              {showPassword ? (
                <EyeSlashIcon className="h-5 w-5" />
              ) : (
                <EyeIcon className="h-5 w-5" />
              )}
            </button>
          )}
          
          {!showPasswordToggle && error && (
            <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
          )}
          
          {!showPasswordToggle && success && (
            <CheckCircleIcon className="h-5 w-5 text-accent" />
          )}
        </div>

        {/* Focus Ring Effect */}
        {isFocused && (
          <div className="absolute inset-0 rounded-xl ring-2 ring-accent/20 pointer-events-none" />
        )}
      </div>

      {/* Error Message */}
      {error && (
        <div className="flex items-center space-x-2 text-red-500 text-sm animate-slide-fade">
          <ExclamationCircleIcon className="h-4 w-4 flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Hint Text */}
      {hint && !error && (
        <p className="text-secondary text-sm">{hint}</p>
      )}
    </div>
  );
};

export default Input;