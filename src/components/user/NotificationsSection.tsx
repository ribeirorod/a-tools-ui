import React from 'react';
import { Bell as BellIcon, CheckCircle, XCircle } from 'lucide-react';

export function NotificationsSection() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Notifications</h2>
        
        <div className="space-y-8">
          {/* Notification Preferences */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Preferences</h3>
            <div className="space-y-4">
              {[
                { title: 'Email Notifications', description: 'Receive updates via email' },
                { title: 'Browser Notifications', description: 'Get notified in your browser' },
                { title: 'Weekly Digest', description: 'Receive weekly usage summary' }
              ].map((pref, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">{pref.title}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{pref.description}</p>
                  </div>
                  <button className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none bg-gray-200 dark:bg-gray-700">
                    <span className="translate-x-0 inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Notifications */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Recent Notifications</h3>
            <div className="space-y-4">
              {[
                { title: 'Usage limit reached', status: 'error', time: '2 hours ago' },
                { title: 'New feature available', status: 'success', time: '1 day ago' },
                { title: 'System maintenance', status: 'info', time: '3 days ago' }
              ].map((notification, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-700/50"
                >
                  {notification.status === 'error' ? (
                    <XCircle className="h-5 w-5 text-red-500" />
                  ) : notification.status === 'success' ? (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  ) : (
                    <BellIcon className="h-5 w-5 text-blue-500" />
                  )}
                  <div className="flex-grow">
                    <p className="text-gray-900 dark:text-white font-medium">
                      {notification.title}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {notification.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}