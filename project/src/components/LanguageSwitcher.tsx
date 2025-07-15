import React from 'react';
import { useState } from 'react';
import { Button } from './ui/button';
import { useLanguage } from '../hooks/useLanguage';
import { ChevronDownIcon, GlobeIcon } from 'lucide-react';

export const LanguageSwitcher: React.FC = () => {
  const { currentLanguage, languages, changeLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="h-8 px-3 text-xs font-medium transition-all duration-200 bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 flex items-center gap-2"
      >
        <GlobeIcon className="w-4 h-4" />
        <span className="mr-1">{currentLanguage.flag}</span>
        {currentLanguage.name}
        <ChevronDownIcon className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </Button>
      
      {isOpen && (
        <div className="absolute top-full right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-[140px]">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                changeLanguage(lang.code);
                setIsOpen(false);
              }}
              className={`w-full px-3 py-2 text-left text-xs font-medium transition-all duration-200 flex items-center gap-2 hover:bg-blue-50 hover:text-blue-600 first:rounded-t-lg last:rounded-b-lg ${
                currentLanguage.code === lang.code 
                  ? 'bg-blue-100 text-blue-700' 
                  : 'text-gray-600'
              }`}
            >
              <span>{lang.flag}</span>
              {lang.name}
            </button>
          ))}
        </div>
      )}
      
      {/* Backdrop to close dropdown when clicking outside */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};