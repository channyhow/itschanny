import { CurrentSectionContext } from "../contexts/CurrentSectionContext";
import {  useState, FC } from 'react';

// Define interface for any props that SectionProvider might take if needed
interface CurrentSectionProviderProps {
  children: React.ReactNode;
}

export const CurrentSectionProvider: FC<CurrentSectionProviderProps> = ({ children }) => {
  const [currentSection, setCurrentSection] = useState<string>('');

  const updateSection = (sectionId: string) => {
    setCurrentSection(sectionId);
    window.history.replaceState({}, '', `#${sectionId}`);
  };

  return (
    <CurrentSectionContext.Provider value={{ currentSection, updateSection }}>
      {children}
    </CurrentSectionContext.Provider>
  );
};