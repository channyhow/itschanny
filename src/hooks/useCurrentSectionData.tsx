import pagesContent from './../data/pagesContent.json';

const useCurrentSectionData = (currentSection: string) => {
    const currentSectionData = pagesContent.sections.find(
        section => section.id === currentSection
    );
    return currentSectionData;
}

export default useCurrentSectionData;