import React, { useEffect, useRef } from 'react';

interface NotificationDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

export function NotificationDropdown({ isOpen, onClose }: NotificationDropdownProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={dropdownRef}
      className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-1 z-50"
    >
      <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Notifications</h3>
      </div>
      <div className="max-h-96 overflow-y-auto">
        {/* Mock notifications */}
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer"
          >
            <p className="text-sm text-gray-900 dark:text-white">
              New feature available: AI Tool {i}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              {i} hour{i !== 1 ? 's' : ''} ago
            </p>
          </div>
        ))}
      </div>
      <div className="px-4 py-2 border-t border-gray-200 dark:border-gray-700">
        <button
          className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 w-full text-center"
        >
          View all notifications
        </button>
      </div>
    </div>
  );
}