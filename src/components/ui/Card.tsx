import React from 'react';

interface CardProps {
  title?: string;
  children: React.ReactNode;
}

export function Card({ title, children }: CardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
      <div className="p-6">
        {title && <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{title}</h2>}
        {children}
      </div>
    </div>
  );
}