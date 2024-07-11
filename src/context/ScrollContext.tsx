import { createContext, RefObject } from 'react';

interface ScrollContextType {
  generalCleaningRef: RefObject<HTMLDivElement>;
  additionCleaningItems: RefObject<HTMLDivElement>;
}

export const ScrollContext = createContext<ScrollContextType | null>(null);
