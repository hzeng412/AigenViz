import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card = ({ children, className = '' }: CardProps) => {
  return (
    <div className={`bg-white rounded-lg shadow p-4 ${className}`}>
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className = '' }: CardProps) => {
  return (
    <div className={`mb-4 ${className}`}>
      {children}
    </div>
  );
};

export const CardTitle = ({ children, className = '' }: CardProps) => {
  return (
    <h3 className={`text-xl font-bold ${className}`}>
      {children}
    </h3>
  );
};

export const CardContent = ({ children, className = '' }: CardProps) => {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
};