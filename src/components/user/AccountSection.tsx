import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { Mail, Key, Shield } from 'lucide-react';

export function AccountSection() {
  const { user } = useAuth();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Account</h2>
        
        <div className="space-y-6">
          {/* Email */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Email Address</h3>
            <div className="flex items-center space-x-4">
              <div className="flex-grow">
                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-900 dark:text-white">{user?.email}</span>
                </div>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Your email address is verified
                </p>
              </div>
              <button className="text-blue-600 dark:text-blue-400 text-sm hover:text-blue-800 dark:hover:text-blue-300">
                Change
              </button>
            </div>
          </div>

          {/* Password */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Password</h3>
            <div className="flex items-center space-x-4">
              <div className="flex-grow">
                <div className="flex items-center space-x-2">
                  <Key className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-900 dark:text-white">••••••••</span>
                </div>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Last changed 3 months ago
                </p>
              </div>
              <button className="text-blue-600 dark:text-blue-400 text-sm hover:text-blue-800 dark:hover:text-blue-300">
                Update
              </button>
            </div>
          </div>

          {/* Two-Factor Authentication */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Two-Factor Authentication</h3>
            <div className="flex items-center space-x-4">
              <div className="flex-grow">
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-900 dark:text-white">Not enabled</span>
                </div>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Add an extra layer of security to your account
                </p>
              </div>
              <button className="text-blue-600 dark:text-blue-400 text-sm hover:text-blue-800 dark:hover:text-blue-300">
                Enable
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}