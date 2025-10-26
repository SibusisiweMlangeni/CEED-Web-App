'use client';

import { useEffect } from 'react';

const TemplateScripts = () => {
  useEffect(() => {
    // Dynamically import JS files after component mounts
    const scripts = [
      '/js/jquery.min.js',
      '/js/bootstrap.min.js',
      '/js/aos.js',
      '/js/owl.carousel.min.js',
      '/js/magnific-popup.min.js',
      '/js/main.js',
    ];

    scripts.forEach((src) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
    });

    return () => {
      scripts.forEach((src) => {
        const script = document.querySelector(`script[src="${src}"]`);
        if (script) document.body.removeChild(script);
      });
    };
  }, []);

  return null;
};

export default TemplateScripts;