import React, { useEffect, useState } from 'react';
import { IconX } from './Icon';

interface ToastProps {
  message: string;
  type: 'success' | 'error' | 'info';
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, type, onClose }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const timer = setTimeout(() => {
      handleClose();
    }, 5000);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message]);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 300); // Allow for fade out animation
  };

  const bgColor = {
    error: 'bg-red-500',
    success: 'bg-green-500',
    info: 'bg-blue-500',
  }[type];

  return (
    <div
      className={`fixed bottom-5 right-5 flex items-center p-4 rounded-lg text-white shadow-lg transition-transform transform ${bgColor} ${
        visible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      }`}
      role="alert"
    >
      <div className="flex-grow">{message}</div>
      <button onClick={handleClose} className="ml-4 p-1 rounded-full hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white">
        <IconX className="w-5 h-5" />
      </button>
    </div>
  );
};
