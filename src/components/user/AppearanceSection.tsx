import React from 'react';
import { Moon, Sun, Monitor } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export function AppearanceSection() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Appearance</h2>
        
        {/* Theme Selection */}
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Theme</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button
                onClick={() => !isDark && toggleTheme()}
                className={`p-4 rounded-lg border-2 transition-colors ${
                  !isDark
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30'
                    : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                }`}
              >
                <Sun className="h-6 w-6 mx-auto mb-2 text-gray-900 dark:text-white" />
                <p className="text-sm font-medium text-gray-900 dark:text-white">Light</p>
              </button>

              <button
                onClick={() => isDark && toggleTheme()}
                className={`p-4 rounded-lg border-2 transition-colors ${
                  isDark
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30'
                    : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                }`}
              >
                <Moon className="h-6 w-6 mx-auto mb-2 text-gray-900 dark:text-white" />
                <p className="text-sm font-medium text-gray-900 dark:text-white">Dark</p>
              </button>

              <button
                className="p-4 rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-colors"
              >
                <Monitor className="h-6 w-6 mx-auto mb-2 text-gray-900 dark:text-white" />
                <p className="text-sm font-medium text-gray-900 dark:text-white">System</p>
              </button>
            </div>
          </div>

          {/* Font Size */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Font Size</h3>
            <div className="flex items-center space-x-4">
              <input
                type="range"
                min="12"
                max="20"
                defaultValue="16"
                className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
              />
              <span className="text-sm text-gray-600 dark:text-gray-300">16px</span>
            </div>
          </div>

          {/* Reduced Motion */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Accessibility</h3>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Reduce Motion</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Minimize animations and transitions
                </p>
              </div>
              <button className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none bg-gray-200 dark:bg-gray-700">
                <span className="translate-x-0 inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}