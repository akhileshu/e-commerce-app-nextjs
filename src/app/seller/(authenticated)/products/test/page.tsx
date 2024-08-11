"use client"
import { useState } from 'react';

export default function HeightTransition() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button 
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        Toggle Height
      </button>
      <div
        className={`focus:transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}
        style={{ maxHeight: isOpen ? '24rem' : '0' }} // Fallback for unsupported browsers
      >
        <div className="p-4 bg-gray-200">
          <p>Your content goes here.</p>
          <p>More content...</p>
          <p>Even more content...</p>
        </div>
      </div>
    </div>
  );
}
