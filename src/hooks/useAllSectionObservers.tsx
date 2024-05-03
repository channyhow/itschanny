import React from 'react';
import { useRef, useEffect } from 'react';

interface Section {
  id: string;
}

interface SectionRefs {
    [key: string]: React.RefObject<HTMLElement>;
  }
  

  const useAllSectionObservers = (sections: Section[], onVisible: (id: string) => void) => {
    const sectionRefs = useRef<SectionRefs>(
      sections.reduce((acc: SectionRefs, section: Section) => {
        acc[section.id] = React.createRef<HTMLElement>();
        return acc;
      }, {})
    );
  
    useEffect(() => {
      sections.forEach(section => {
        const ref = sectionRefs.current[section.id];
        if (ref && ref.current) {
          const observer = new IntersectionObserver(
            (entries) => {
              entries.forEach(entry => {
                if (entry.isIntersecting) {
                  onVisible(section.id);
                }
              });
            },
            { root: null, rootMargin: '0px', threshold: 0.1 }
          );
  
          observer.observe(ref.current);
  
          return () => {
            observer.disconnect();
          };
        }
      });
    }, [sections, onVisible]); // Ensuring dependencies are stable is crucial for correct behavior
  
    return sectionRefs.current;
  };
  
  export default useAllSectionObservers;