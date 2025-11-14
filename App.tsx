import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { ImageUploader } from './components/ImageUploader';
import { ControlPanel } from './components/ControlPanel';
import { ImageViewer } from './components/ImageViewer';
import { generateMarketingImage } from './services/geminiService';
import { fileToGenerativePart } from './utils/fileUtils';
import { Toast } from './components/Toast';
import type { FileDetails } from './types';

export default function App() {
  const [originalImage, setOriginalImage] = useState<FileDetails | null>(null);
  const [prompt, setPrompt] = useState<string>('');
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleImageUpload = (file: File) => {
    setOriginalImage({
      file,
      url: URL.createObjectURL(file),
    });
    setGeneratedImage(null);
  };

  const handleGenerate = useCallback(async () => {
    if (!originalImage || !prompt.trim()) {
      setError('Please upload an image and enter a prompt.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setGeneratedImage(null);

    try {
      const imagePart = await fileToGenerativePart(originalImage.file);
      const result = await generateMarketingImage(imagePart, prompt);
      setGeneratedImage(result);
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred.';
      console.error('Generation failed:', errorMessage);
      setError(`Failed to generate image. ${errorMessage}`);
    } finally {
      setIsLoading(false);
    }
  }, [originalImage, prompt]);

  const presetPrompts = [
    'on a white coffee mug, studio lighting',
    'on a billboard in a futuristic city at night',
    'on a black cotton t-shirt worn by a model',
    'as a logo on a reusable shopping bag',
    'on the screen of a modern smartphone',
    'as a sticker on a laptop',
  ];

  const handlePresetPrompt = (preset: string) => {
    const newPrompt = `Place the product image ${preset}`;
    setPrompt(newPrompt);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans">
      <Header />
      <main className="p-4 sm:p-6 md:p-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column: Controls */}
            <div className="flex flex-col gap-8">
              <ImageUploader onImageUpload={handleImageUpload} imagePreviewUrl={originalImage?.url ?? null} />
              <ControlPanel
                prompt={prompt}
                onPromptChange={setPrompt}
                onSubmit={handleGenerate}
                isLoading={isLoading}
                onPresetSelect={handlePresetPrompt}
                presets={presetPrompts}
                isImageUploaded={!!originalImage}
              />
            </div>

            {/* Right Column: Viewer */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 flex items-center justify-center min-h-[400px] lg:min-h-0">
              <ImageViewer
                originalImageUrl={originalImage?.url ?? null}
                generatedImageUrl={generatedImage}
                isLoading={isLoading}
              />
            </div>
          </div>
        </div>
      </main>
      {error && <Toast message={error} type="error" onClose={() => setError(null)} />}
    </div>
  );
}
