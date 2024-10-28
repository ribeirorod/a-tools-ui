import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

export type SidebarDirection = 'left' | 'right' | 'top' | 'bottom';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  direction?: SidebarDirection;
  children: React.ReactNode;
}

const directionClasses = {
  left: {
    container: 'left-0 top-0 h-full',
    content: 'w-[25vw] min-w-[320px] h-full transform -translate-x-full',
    animation: 'translate-x-0'
  },
  right: {
    container: 'right-0 top-0 h-full',
    content: 'w-[25vw] min-w-[320px] h-full transform translate-x-full',
    animation: 'translate-x-0'
  },
  top: {
    container: 'top-0 left-0 w-full',
    content: 'w-full h-80 transform -translate-y-full',
    animation: 'translate-y-0'
  },
  bottom: {
    container: 'bottom-0 left-0 w-full',
    content: 'w-full h-80 transform translate-y-full',
    animation: 'translate-y-0'
  }
};

export default function Sidebar({ isOpen, onClose, direction = 'right', children }: SidebarProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const classes = directionClasses[direction];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (overlayRef.current && event.target === overlayRef.current) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  return (
    <div
      ref={overlayRef}
      className={`fixed inset-0 z-[100] bg-black bg-opacity-50 transition-opacity duration-300 ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
    >
      <div className={`fixed ${classes.container} z-[101]`}>
        <div
          className={`bg-white shadow-xl ${classes.content} transition-transform duration-300 h-screen ${
            isOpen ? classes.animation : ''
          }`}
        >
          <div className="absolute right-4 top-4">
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X className="h-5 w-5 text-gray-500" />
            </button>
          </div>
          <div className="h-full overflow-y-auto p-6 pt-12">{children}</div>
        </div>
      </div>
    </div>
  );
}