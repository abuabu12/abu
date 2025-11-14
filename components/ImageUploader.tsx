import React, { useRef, useCallback } from 'react';
import { IconUpload, IconImage } from './Icon';

interface ImageUploaderProps {
  onImageUpload: (file: File) => void;
  imagePreviewUrl: string | null;
}

export const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageUpload, imagePreviewUrl }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onImageUpload(file);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };
  
  const handleDrop = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    const file = event.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
        onImageUpload(file);
    }
  }, [onImageUpload]);

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
      <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4">1. Upload Product Image</h2>
      <div
        className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl p-4 text-center cursor-pointer hover:border-indigo-500 dark:hover:border-indigo-400 transition-colors duration-300"
        onClick={handleClick}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
          accept="image/png, image/jpeg, image/webp"
        />
        {imagePreviewUrl ? (
          <div className="relative group">
            <img src={imagePreviewUrl} alt="Preview" className="mx-auto max-h-60 rounded-lg object-contain" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
              <p className="text-white font-semibold">Click or drop to replace</p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-8">
            <IconImage className="w-12 h-12 text-gray-400 dark:text-gray-500 mb-2" />
            <p className="text-gray-500 dark:text-gray-400">
              <span className="font-semibold text-indigo-600 dark:text-indigo-400">Click to upload</span> or drag and drop
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">PNG, JPG, or WEBP</p>
          </div>
        )}
      </div>
    </div>
  );
};
