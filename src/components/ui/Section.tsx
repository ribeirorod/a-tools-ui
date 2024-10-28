import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export function Section({ title, children }: SectionProps) {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">{title}</h3>
      {children}
    </div>
  );
}