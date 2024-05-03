import { useState, useEffect, useCallback } from 'react';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import './styles.scss';
import { BodyContentProps } from '../../types';

// Interface defining the props expected by the FloatingScroll component
interface FloatingScrollProps {
  sections: BodyContentProps[];
}

// FloatingScroll component that facilitates smooth scrolling to different page sections
const FloatingScroll = ({ sections }: FloatingScrollProps) => {
  // State to track the currently active section index
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  // Function to update the current section index based on the scroll position
  const updateCurrentSection = useCallback(() => {
    // Map each section to get its offsetTop, the vertical position within the viewport
    const sectionOffsets = sections.map(ref => ref.current?.offsetTop || 0);
    // Calculate the current vertical midpoint of the viewport
    const currentPosition = window.scrollY + window.innerHeight / 2;

    // Find the index of the next section that the user has scrolled close to
    const nextSectionIndex = sectionOffsets.findIndex((offset, index) => {
      return currentPosition < offset && index > currentSectionIndex;
    });

    // Update the current section index if a new section has been reached
    if (nextSectionIndex !== -1) {
      setCurrentSectionIndex(nextSectionIndex);
    }
  }, [sections, currentSectionIndex]);

  // Effect to add and remove the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', updateCurrentSection);
    return () => {
      window.removeEventListener('scroll', updateCurrentSection);
    };
  }, [updateCurrentSection]);

  // Function to scroll to the next section when the floating icon is clicked
  const scrollToNextSection = () => {
    // Get the ref of the next section based on the currentSectionIndex
    const nextSection = sections[currentSectionIndex]?.current;
    if (nextSection) {
      // Use the browser's smooth scroll behavior to scroll to the next section
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Render a floating icon that, when clicked, triggers scrolling to the next section
  return (
    <div className='floating-icon' onClick={scrollToNextSection}>
      <ArrowDownwardIcon />
    </div>
  );
};

export default FloatingScroll;
