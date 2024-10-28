import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Tool } from '../types';

interface ToolCardProps {
  tool: Tool;
}

export function ToolCard({ tool }: ToolCardProps) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/tool/${tool.id}`)}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
    >
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          {tool.name}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {tool.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tool.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
        <div
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
        >
          Learn more
          <ArrowRight className="ml-1 h-4 w-4" />
        </div>
      </div>
    </div>
  );
}