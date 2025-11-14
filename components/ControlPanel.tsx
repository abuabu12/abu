import React from 'react';
import { IconWand, IconSpinner } from './Icon';

interface ControlPanelProps {
  prompt: string;
  onPromptChange: (prompt: string) => void;
  onSubmit: () => void;
  isLoading: boolean;
  presets: string[];
  onPresetSelect: (preset: string) => void;
  isImageUploaded: boolean;
}

export const ControlPanel: React.FC<ControlPanelProps> = ({
  prompt,
  onPromptChange,
  onSubmit,
  isLoading,
  presets,
  onPresetSelect,
  isImageUploaded,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg flex flex-col h-full">
      <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4">2. Describe The Scene</h2>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
        Tell the AI how you want to visualize your product. Be descriptive!
      </p>

      <div className="mb-4">
        <label htmlFor="prompt" className="sr-only">Prompt</label>
        <textarea
          id="prompt"
          value={prompt}
          onChange={(e) => onPromptChange(e.target.value)}
          placeholder="e.g., 'Place the product image on a white coffee mug, studio lighting'"
          className="w-full h-28 p-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200 resize-none"
          disabled={!isImageUploaded || isLoading}
        />
      </div>

      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">Or try a preset:</h3>
        <div className="flex flex-wrap gap-2">
          {presets.map((preset) => (
            <button
              key={preset}
              onClick={() => onPresetSelect(preset)}
              disabled={!isImageUploaded || isLoading}
              className="px-3 py-1.5 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-full hover:bg-indigo-100 dark:hover:bg-indigo-900 hover:text-indigo-700 dark:hover:text-indigo-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              {`... ${preset}`}
            </button>
          ))}
        </div>
      </div>
      
      <div className="mt-auto">
        <button
          onClick={onSubmit}
          disabled={!isImageUploaded || !prompt.trim() || isLoading}
          className="w-full flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-gray-400 disabled:cursor-not-allowed dark:disabled:bg-gray-600 transition-all duration-300 transform hover:scale-105"
        >
          {isLoading ? (
            <>
              <IconSpinner className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
              Generating...
            </>
          ) : (
            <>
              <IconWand className="-ml-1 mr-2 h-5 w-5" />
              Generate Visualization
            </>
          )}
        </button>
      </div>
    </div>
  );
};
