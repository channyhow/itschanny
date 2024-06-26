import { useCallback, useState } from 'react';
import { UseCurrentSectionReturn } from '../types';


export const useCurrentSection = (): UseCurrentSectionReturn => {
  const [currentSection, setCurrentSection] = useState<string>('home');


const updateSection = useCallback((newSection: string) => {
  console.log(`Updating section from ${currentSection} to ${newSection}`);
  if (currentSection !== newSection) {
      setCurrentSection(newSection);
  } else {
      // For debugging: force the update, this is not generally a good practice
      setCurrentSection(newSection + ' '); // Adding a space to make it different
      setCurrentSection(newSection); // Reverting back immediately
  }
}, [currentSection]);

  return { currentSection, updateSection }; // Return as an object
};
