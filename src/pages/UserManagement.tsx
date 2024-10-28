import React, { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Card } from '../components/ui/Card';
import { Layout } from '../components/ui/Layout';
import { AccountSection } from '../components/user/AccountSection';
import { AppearanceSection } from '../components/user/AppearanceSection';
import { BillingSection } from '../components/user/BillingSection';
import { NotificationsSection } from '../components/user/NotificationsSection';
import { ProfileSection } from '../components/user/ProfileSection';
import { UsageSection } from '../components/user/UsageSection';

const sections = [
  { id: 'profile', label: 'Profile', component: ProfileSection },
  { id: 'account', label: 'Account', component: AccountSection },
  { id: 'usage', label: 'Usage', component: UsageSection },
  { id: 'notifications', label: 'Notifications', component: NotificationsSection },
  { id: 'billing', label: 'Billing', component: BillingSection },
  { id: 'appearance', label: 'Appearance', component: AppearanceSection }
];

type SectionRefs = {
  [key: string]: React.RefObject<HTMLDivElement>;
};

export function UserManagement() {
  const location = useLocation();
  const navigate = useNavigate();
  const sectionRefs = useRef<SectionRefs>(
    sections.reduce((acc, section) => ({ ...acc, [section.id]: React.createRef<HTMLDivElement>() }), {})
  );
  useEffect(() => {
    const sectionId = location.hash.replace('#', '') || 'profile';
    const ref = sectionRefs.current[sectionId];
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location.hash]);

  const navigateToSection = (sectionId: string) => {
    navigate(`#${sectionId}`);
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-64 flex-shrink-0">
            <Card>
              <nav className="space-y-1">
                {sections.map(({ id, label }) => (
                  <button
                    key={id}
                    onClick={() => navigateToSection(id)}
                    className={`w-full text-left px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      location.hash === `#${id}` || (!location.hash && id === 'profile')
                        ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/50 dark:text-blue-200'
                        : 'text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </nav>
            </Card>
          </div>
          <div className="flex-1 space-y-8">
            {sections.map(({ id, component: Component }) => (
              <div key={id} ref={sectionRefs.current[id]}>
                <Component />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}