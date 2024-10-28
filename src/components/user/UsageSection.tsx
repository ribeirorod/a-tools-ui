import React from 'react';
import { BarChart2, Clock, Zap } from 'lucide-react';

export function UsageSection() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Usage</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
            <div className="flex items-center space-x-3">
              <Zap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <div>
                <p className="text-sm text-blue-600 dark:text-blue-400">API Calls</p>
                <p className="text-2xl font-bold text-blue-700 dark:text-blue-300">12,543</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
            <div className="flex items-center space-x-3">
              <Clock className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <div>
                <p className="text-sm text-blue-600 dark:text-blue-400">Processing Time</p>
                <p className="text-2xl font-bold text-blue-700 dark:text-blue-300">245.3s</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
            <div className="flex items-center space-x-3">
              <BarChart2 className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <div>
                <p className="text-sm text-blue-600 dark:text-blue-400">Success Rate</p>
                <p className="text-2xl font-bold text-blue-700 dark:text-blue-300">99.9%</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Usage History</h3>
            <div className="space-y-4">
              {[
                { tool: 'AI Text Generator', usage: '5,234 calls', date: 'Today' },
                { tool: 'Image Enhancer', usage: '3,421 calls', date: 'Yesterday' },
                { tool: 'Code Assistant', usage: '2,654 calls', date: 'Last Week' }
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700 last:border-0"
                >
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">{item.tool}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{item.usage}</p>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{item.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}