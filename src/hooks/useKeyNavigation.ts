import { useEffect } from 'react';

export function useKeyNavigation(key: string, callback: () => void, ctrlOrCmd: boolean = false): void {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const modifierPressed = ctrlOrCmd ? event.metaKey || event.ctrlKey : true;
      if (modifierPressed && event.key.toLowerCase() === key.toLowerCase()) {
        event.preventDefault();
        callback();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [key, callback, ctrlOrCmd]);
}
