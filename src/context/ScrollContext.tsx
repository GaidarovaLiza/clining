import { createContext, RefObject } from 'react';

export interface ScrollContextType {
  generalCleaningRef: RefObject<HTMLDivElement>;
  maintenanceCleaningRef: RefObject<HTMLDivElement>;
  additionCleaningItems: RefObject<HTMLDivElement>;
}

export const ScrollContext = createContext<ScrollContextType | null>(null);
