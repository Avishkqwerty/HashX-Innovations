import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there's a hash, scroll to that element
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        // If element not found, scroll to top
        window.scrollTo(0, 0);
      }
    } else {
      // No hash, scroll to top
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}
