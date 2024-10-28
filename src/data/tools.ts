import { Tool } from '../types';

export const categories = [
  'AI & ML',
  'Development',
  'Design',
  'Audio',
  'Video',
  'Education',
  'Analytics',
  'Productivity'
] as const;

export type Category = typeof categories[number];

export const tools: Tool[] = [
  {
    id: '1',
    name: 'AI Assistant',
    description: 'Advanced AI assistant for content generation and analysis',
    icon: 'Wand2',
    category: 'AI & ML',
    tags: ['AI', 'ML', 'assistant'],
    featured: true
  },
  {
    id: '2',
    name: 'Neural Engine',
    description: 'Deep learning model training and deployment platform',
    icon: 'Brain',
    category: 'AI & ML',
    tags: ['AI', 'ML', 'Engine'],
    featured: false
  },
  {
    id: '3',
    name: 'Code Generator',
    description: 'AI-powered code generation and optimization tool',
    icon: 'Code2',
    category: 'Development',
    tags: ['code-generation'],
    featured: true
  },
  {
    id: '4',
    name: 'Design Assistant',
    description: 'Automated design suggestions and UI component generation',
    icon: 'Palette',
    category: 'Design',
    tags: ['visual-design'],
    featured: false
  },
  {
    id: '5',
    name: 'Audio Enhancer',
    description: 'Professional audio processing and enhancement suite',
    icon: 'Music',
    category: 'Audio',
    tags: ['audio-enhancement'],
    featured: true
  },
  {
    id: '6',
    name: 'Video Editor',
    description: 'AI-powered video editing and post-processing tool',
    icon: 'Video',
    category: 'Video',
    tags: ['video-editing'],
    featured: false
  },
  {
    id: '7',
    name: 'Learning Path',
    description: 'Personalized learning recommendations and tracking',
    icon: 'BookOpen',
    category: 'Education',
    tags: ['learning', 'education'],
    featured: true
  },
  {
    id: '8',
    name: 'Analytics Hub',
    description: 'Comprehensive data analytics and visualization platform',
    icon: 'LineChart',
    category: 'Analytics',
    tags: ['data-analytics'],
    featured: false
  },
  {
    id: '9',
    name: 'Global Translator',
    description: 'Real-time translation and localization service',
    icon: 'Globe',
    category: 'Productivity',
    tags: ['translation', 'localization'],
    featured: true
  },
  {
    id: '10',
    name: 'Image Generator',
    description: 'AI-powered image generation and manipulation tool',
    icon: 'Camera',
    category: 'Design',
    tags: ['image', 'photo'],
    featured: false
  }
];