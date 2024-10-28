import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { mockTools } from '../data/mockTools';

export function ToolPage() {
  const { id } = useParams<{ id: string }>();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  
  const tool = mockTools.find(t => t.id === id);

  if (!tool) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600 dark:text-gray-300">Tool not found</p>
      </div>
    );
  }

  const handleLaunchTool = () => {
    if (!isAuthenticated) {
      navigate('/login');
    }
    // Handle tool launch logic here
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="p-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{tool.name}</h1>
            <button
              onClick={handleLaunchTool}
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors"
            >
              Launch Tool
            </button>
          </div>
          
          <div className="mt-4 flex flex-wrap gap-2">
            {tool.tags.map(tag => (
              <span
                key={tag}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="mt-6 text-gray-600 dark:text-gray-300">{tool.description}</p>

          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Features</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              {tool.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}