import React from 'react';
import { CreditCard, Download, AlertCircle } from 'lucide-react';

export function BillingSection() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Billing</h2>
        
        {/* Current Plan */}
        <div className="mb-8">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Current Plan</h3>
          <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-lg font-semibold text-blue-700 dark:text-blue-300">Pro Plan</p>
                <p className="text-sm text-blue-600 dark:text-blue-400">$29/month</p>
              </div>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors">
                Upgrade Plan
              </button>
            </div>
          </div>
        </div>

        {/* Payment Method */}
        <div className="mb-8">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Payment Method</h3>
          <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <div className="flex items-center space-x-3">
              <CreditCard className="h-6 w-6 text-gray-400" />
              <div>
                <p className="font-medium text-gray-900 dark:text-white">•••• •••• •••• 4242</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Expires 12/24</p>
              </div>
            </div>
            <button className="text-blue-600 dark:text-blue-400 text-sm hover:text-blue-800 dark:hover:text-blue-300">
              Update
            </button>
          </div>
        </div>

        {/* Billing History */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Billing History</h3>
          <div className="space-y-4">
            {[
              { date: 'Mar 1, 2024', amount: '$29.00', status: 'Paid' },
              { date: 'Feb 1, 2024', amount: '$29.00', status: 'Paid' },
              { date: 'Jan 1, 2024', amount: '$29.00', status: 'Paid' }
            ].map((invoice, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700 last:border-0"
              >
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">{invoice.date}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{invoice.amount}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-green-600 dark:text-green-400">{invoice.status}</span>
                  <button className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
                    <Download className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}