import React, { useState } from 'react';
import { Bell, Sun, Moon, Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { MainSidebar } from './MainSidebar';
import { NotificationDropdown } from './NotificationDropdown';
import { useTheme } from '../context/ThemeContext';
import { useSidebar } from '../context/SidebarContext';

interface NavItemProps {
  to: string;
  children: React.ReactNode;
  currentPath: string;
  onClick?: () => void;
}

function NavItem({ to, children, currentPath, onClick }: NavItemProps) {
  const isActive = currentPath === to;
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`px-4 py-2 rounded-md text-base font-medium transition-all duration-200 ${
        isActive
          ? 'font-semibold text-blue-600 dark:text-dark-200'
          : 'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
      }`}
    >
      {children}
    </Link>
  );
}

export function Navbar() {
  const { user, isAuthenticated, logout } = useAuth();
  const { isDark, toggleTheme } = useTheme();
  const { isLeftSidebarOpen, toggleLeftSidebar } = useSidebar();
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              {isAuthenticated && (
                <button 
                  onClick={toggleLeftSidebar}
                  className="p-1.5 rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <Menu className="h-5 w-5" />
                </button>
              )}
              <Link to="/" className="ml-4 text-xl font-code tracking-tighter text-gray-900 dark:text-white">
                A\\TOOLS
              </Link>
              <div className="ml-8 flex items-center space-x-4">
                <NavItem to="/" currentPath={location.pathname}>
                  Home
                </NavItem>
                <NavItem to="/tools" currentPath={location.pathname}>
                  Tools
                </NavItem>
                <NavItem to="/pricing" currentPath={location.pathname}>
                  Pricing
                </NavItem>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className="p-1.5 rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
              
              {isAuthenticated ? (
                <>
                  <div className="relative">
                    <button
                      onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                      className="p-1.5 rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      <Bell className="h-4 w-4" />
                    </button>
                    <NotificationDropdown
                      isOpen={isNotificationsOpen}
                      onClose={() => setIsNotificationsOpen(false)}
                    />
                  </div>
                  <div className="flex items-center">
                    <Link
                      to="/profile"
                      className="flex items-center"
                    >
                      <div className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                        <span className="text-sm font-medium text-blue-600 dark:text-blue-200">
                          {user?.name.charAt(0).toUpperCase()}
                        </span>
                      </div>
                    </Link>
                    <button
                      onClick={logout}
                      className="ml-4 px-3 py-2 rounded-md text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                    >
                      Sign out
                    </button>
                  </div>
                </>
              ) : (
                <div className="flex items-center space-x-4">
                  <Link
                    to="/login"
                    className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  >
                    Sign in
                  </Link>
                  <Link
                    to="/register"
                    className="text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-dark-500 dark:hover:bg-dark-600 px-4 py-2 rounded-md"
                  >
                    Sign up
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {isAuthenticated && (
        <MainSidebar
          isOpen={isLeftSidebarOpen}
          onClose={toggleLeftSidebar}
        />
      )}
    </>
  );
}