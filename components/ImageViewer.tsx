import React from 'react';
import { IconSpinner, IconImage } from './Icon';

interface ImageViewerProps {
  originalImageUrl: string | null;
  generatedImageUrl: string | null;
  isLoading: boolean;
}

export const ImageViewer: React.FC<ImageViewerProps> = ({ originalImageUrl, generatedImageUrl, isLoading }) => {
  const Placeholder = () => (
    <div className="flex flex-col items-center justify-center text-center text-gray-500 dark:text-gray-400 h-full">
        <IconImage className="w-20 h-20 text-gray-300 dark:text-gray-600 mb-4" />
        <h3 className="text-lg font-semibold">Your Visualization Appears Here</h3>
        <p className="max-w-xs mt-1 text-sm">Upload a product image and write a prompt to get started.</p>
    </div>
  );

  return (
    <div className="w-full h-full aspect-square flex items-center justify-center relative">
        {!generatedImageUrl && !isLoading && <Placeholder />}
        
        {isLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-500 bg-opacity-20 backdrop-blur-sm z-10 rounded-xl">
                <IconSpinner className="w-12 h-12 text-indigo-500 animate-spin" />
                <p className="mt-4 text-lg font-semibold text-gray-700 dark:text-gray-200">Generating your vision...</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">This may take a few moments.</p>
            </div>
        )}

        {generatedImageUrl && (
            <img 
                src={generatedImageUrl} 
                alt="Generated Visualization" 
                className={`w-full h-full object-contain rounded-lg transition-opacity duration-500 ${isLoading ? 'opacity-30' : 'opacity-100'}`}
            />
        )}

        {!generatedImageUrl && isLoading && originalImageUrl && (
            <img 
                src={originalImageUrl} 
                alt="Original Product" 
                className="w-full h-full object-contain rounded-lg opacity-30"
            />
        )}
    </div>
  );
};
