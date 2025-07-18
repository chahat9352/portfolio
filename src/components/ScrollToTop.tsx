import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-30 w-12 h-12 bg-gradient-to-r from-red-500 to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 flex items-center justify-center ${
        isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
      }`}
    >
      <ChevronUp size={20} />
    </button>
  );
};

export default ScrollToTop;