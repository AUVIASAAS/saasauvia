import React, { forwardRef } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = '', leftIcon, rightIcon, fullWidth = false, ...props }, ref) => {
    const baseInputClasses = 'bg-white border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed';
    const inputClasses = error
      ? `${baseInputClasses} border-red-500 text-red-900 placeholder-red-300 focus:ring-red-500`
      : `${baseInputClasses} border-gray-300 focus:border-blue-500`;
    
    const widthClass = fullWidth ? 'w-full' : '';
    
    const paddingClasses = 
      leftIcon && rightIcon ? 'pl-10 pr-10' : 
      leftIcon ? 'pl-10' : 
      rightIcon ? 'pr-10' : 
      'px-4';
    
    return (
      <div className={`${widthClass}`}>
        {label && (
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {label}
          </label>
        )}
        <div className="relative">
          {leftIcon && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
              {leftIcon}
            </div>
          )}
          <input
            ref={ref}
            className={`${inputClasses} ${paddingClasses} h-10 py-2 ${widthClass} ${className}`}
            {...props}
          />
          {rightIcon && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-500">
              {rightIcon}
            </div>
          )}
        </div>
        {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;