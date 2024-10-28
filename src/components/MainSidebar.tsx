import React from 'react';
import { UserCircle, CreditCard, Settings, Bell, ChevronLeft, BarChart2, Palette } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useSidebar } from '../context/SidebarContext';

interface MainSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MainSidebar({ isOpen, onClose }: MainSidebarProps) {
  const location = useLocation();
  const { toggleLeftSidebar } = useSidebar();

  const MenuItem = ({ to, icon: Icon, children }: { to: string; icon: React.ElementType; children: React.ReactNode }) => (
    <Link
      to={to}
      onClick={onClose}
      className={`flex items-center px-4 py-2 text-sm rounded-md transition-colors ${
        location.pathname.includes(to)
          ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/50 dark:text-blue-200'
          : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
      }`}
    >
      <Icon className="h-5 w-5 mr-3" />
      {children}
    </Link>
  );

  const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div className="mb-8">
      <h3 className="px-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
        {title}
      </h3>
      <nav className="space-y-1">
        {children}
      </nav>
    </div>
  );

  return (
    <div
      className={`fixed left-0 top-16 h-[calc(100vh-4rem)] bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 shadow-lg transition-all duration-300 z-50 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
      style={{ width: '320px' }}
    >
      <div className="relative h-full">
        <button
          onClick={toggleLeftSidebar}
          className="absolute right-4 top-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          <ChevronLeft className="h-5 w-5 text-gray-500 dark:text-gray-400" />
        </button>

        <div className="p-4 pt-16 h-full overflow-y-auto">
          <Section title="User">
            <MenuItem to="/user#profile" icon={UserCircle}>Profile</MenuItem>
            <MenuItem to="/user#account" icon={Settings}>Account</MenuItem>
            <MenuItem to="/user#usage" icon={BarChart2}>Usage</MenuItem>
            <MenuItem to="/user#notifications" icon={Bell}>Notifications</MenuItem>
          </Section>

          <Section title="Settings">
            <MenuItem to="/billing" icon={CreditCard}>Billing</MenuItem>
            <MenuItem to="/appearance" icon={Palette}>Appearance</MenuItem>
          </Section>
        </div>
      </div>
    </div>
  );
}