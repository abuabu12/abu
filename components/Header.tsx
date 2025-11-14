import React from 'react';
import { IconImageEdit } from './Icon';

export const Header: React.FC = () => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="bg-indigo-600 p-2 rounded-lg">
            <IconImageEdit className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white tracking-tight">
            Product Visualizer AI
          </h1>
        </div>
        <div className="text-sm font-semibold text-indigo-500">
            Powered by Gemini 2.5 Flash Image
        </div>
      </div>
    </header>
  );
};
