import { useEffect, useState } from 'react';

export const useMatchMedia = (q: string) => {
  const [matches, setMatches] = useState<boolean>(
    window?.matchMedia?.(q)?.matches ?? false
  );

  useEffect(() => {
    const media = window?.matchMedia?.(q);
    if (!media) return;
    const callback = (e: MediaQueryListEvent) => setMatches(e.matches);
    media.addEventListener('change', callback);
    return () => media.removeEventListener('change', callback);
  }, [q]);

  return matches;
};
