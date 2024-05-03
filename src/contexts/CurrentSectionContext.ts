import { createContext, useContext } from 'react';

interface CurrentSectionContextType {
  currentSection: string;
  updateSection: (sectionId: string) => void;
}

export const CurrentSectionContext = createContext<CurrentSectionContextType | undefined>(undefined);

export const useCurrentSection = (): CurrentSectionContextType => {
  const context = useContext(CurrentSectionContext);
  if (!context) {
    throw new Error('useCurrentSection must be used within a CurrentSectionProvider');
  }
  return context;
};
