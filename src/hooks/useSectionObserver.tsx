import { useEffect, RefObject } from "react";

const useSectionObserver = (
  ref: RefObject<HTMLElement>,
  id: string,
  onVisible: (id: string) => void
) => {
  useEffect(() => {
    // Check if the current ref is not null
    const element = ref.current;
    if (!element) {
      console.log(`No element to observe for section ${id}`);
      return; // Exit if there is no element to observe
    }

    console.log(`Setting up observer for section ${id}`);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            onVisible(id);
          }
        });
      },
      { root: null, rootMargin: '0px', threshold: 0.1 } // Configuration options for the observer
    );

    // Begin observing the element
    observer.observe(element);

    // Cleanup function to disconnect the observer when the component unmounts or dependencies change
    return () => {
      observer.disconnect();
      console.log(`Disconnecting observer for section ${id}`);
    };
  }, [ref, id, onVisible]); // Dependencies include the ref, id, and the onVisible callback
};

export default useSectionObserver;
