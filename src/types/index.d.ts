import { CSSProperties, ReactNode, RefObject } from "react";

// Configuration for any grid layout
export interface GridConfig {
  columns: number;
  rows: number;
  gap: string;
}

export interface UseCurrentSectionReturn {
  currentSection: string;
  updateSection: (newSection: string) => void;
}

// Props for a container component
export interface ContainerProps {
  title?: string;
  subtitle?: string;
  content1?: string;
  content2?: string;
  children?: ReactNode;
  style?: CSSProperties;
  // section: string;
}

// Props for sections of a page// Props for sections of a page
export interface SectionProps {
  content: string[];
  id: string;
  title: string;
  children?: ReactNode;
  backgroundColor?: string;
  headerBackgroundColor?: string; // Add this line
  color: string;
  padding: string;
  sectionColor: string;
  containerColor: string;
  headerColor: string;
  languageColor: string;
  margin: string;
  height: string;
  style: CSSProperties;
  className?: string;
}


// Props for SectionComponent
export interface SectionComponentProps {
  section: SectionProps;
  ref: RefObject<HTMLElement>;
  className?: string;
  currentSection: string;
  updateSection: (newSection: string) => void;
}

// Props for Header component
export interface HeaderProps {
  sections: SectionProps[];
  currentSection: string;
  style: CSSProperties;
  background: string;
}

export interface FooterProps {
  style: CSSProperties;
}

// Props for components that act as wrappers or spacers
export interface WrapperProps {
  children: ReactNode;
  className?: string;
}

export interface WrapperScrollerProps {
  children: ReactNode;
}

export interface PinSpacerProps {
  style: CSSProperties;
  children: React.ReactNode;
  className: string;
  // currentSection: string;
}

// Props for a card component
export interface CardProps {
  data: ProjectData;
}

// Props for Shell component, simplified and corrected
export interface ShellProps extends WrapperProps {
  display: string;
  flexDirection?: "row" | "column";
  justifyContent?: "flex-start" | "center" | "flex-end" | "space-between";
  alignItems: string;
  padding?: string;
  width?: string;
  maxWidth?: string;
  height?: string;
  scale?: string;
  currentSection: string;
  className: string;
}

// Props for the main content body that might include multiple sections
export interface BodyContentProps {
  sections: SectionProps[];
}

// General props for pages received from routing
export interface PageProps {
  title: string;
  id: string;
  color?: string;
  description?: string;
}

// Props for a common page component
export interface CommonPageProps {
  section: SectionProps;
  currentSection?: string;
  sectionId?: string;
}

// State for section context
export interface SectionContextState {
  currentSection: string;
  updateSection: (sectionId: string) => void;
}

// Image data interface
export interface ImageData {
  src: string;
  title: string;
  description: string;
  cols: number;
  rows: number;
  objectFit: "cover" | "contain";
  objectPosition: string;
  backgroundColor: string;
  width: string;
  height: string;
}

// Projects interface
export interface Projects {
  title: string;
  items: ProjectData[];
  visit: string;
  published: string;
  style: string;
  tech: string;
}

// Project data interface
export interface ProjectData {
  name: string;
  title: string;
  description: string;
  techno: string[];
  url: string;
  date: string;
  type: string[];
  images: ImageData[];
  body: string;
  palette: string[];
  fonts: string[];
}

// Props for project gallery component
export interface ProjectGalleryProps {
  section?: PageProps;
}

// Props for image modal component
export interface ImageModalProps {
  open: boolean;
  handleClose: () => void;
  data: ProjectData[];
  currentProject: number;
  setCurrentProject: (index: number) => void;
  section?: PageProps;
}

// Type for page components
export type PageComponent = React.ComponentType<CommonPageProps>;

// Mapping interface for page content components
export interface PageContentMap {
  [key: string]: PageComponent;
}
