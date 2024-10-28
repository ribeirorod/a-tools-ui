import React from 'react';
import { LogOut, User, Settings, HelpCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function UserPanel() {
  const { user, logout } = useAuth();

  return (
    <div className="space-y-6">
      <div className="text-center">
        <div className="inline-block relative">
          {user?.avatar ? (
            <img
              src={user.avatar}
              alt={user.name}
              className="h-20 w-20 rounded-full border-4 border-white shadow-lg"
            />
          ) : (
            <div className="h-20 w-20 rounded-full bg-blue-100 flex items-center justify-center">
              <User className="h-10 w-10 text-blue-600" />
            </div>
          )}
        </div>
        <h2 className="mt-4 text-xl font-semibold text-gray-900">{user?.name}</h2>
        <p className="text-gray-500">{user?.email}</p>
      </div>

      <div className="space-y-2">
        <button className="w-full flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
          <User className="h-5 w-5 mr-3" />
          Profile
        </button>
        <button className="w-full flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
          <Settings className="h-5 w-5 mr-3" />
          Settings
        </button>
        <button className="w-full flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
          <HelpCircle className="h-5 w-5 mr-3" />
          Help & Support
        </button>
        <button
          onClick={logout}
          className="w-full flex items-center px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg"
        >
          <LogOut className="h-5 w-5 mr-3" />
          Sign Out
        </button>
      </div>
    </div>
  );
}