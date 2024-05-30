import { CSSProperties, React, RefObject } from "react";

// Configuration for any grid layout
export interface GridConfig {
  columns: number;
  rows: number;
  gap: string;
}

// Extend React.HTMLProps for common HTML element props and add custom ones
export interface SectionProps extends React.HTMLProps<HTMLElement> {
  sectionRef: React.RefObject<HTMLDivElement>;
  // current: React.RefObject<HTMLDivElement>;
  // isActive: boolean; // More explicit than 'current' for indicating active state
  backgroundColor?: string;
  flexDirection?: "row" | "column";
  justifyContent?: "flex-start" | "center" | "flex-end" | "space-between";
  alignItems?: "flex-start" | "center" | "flex-end";
  flexWrap?: "wrap" | "nowrap" | "wrap-reverse";
  minHeight?: string;
  display?: string;
  padding?: string;
  id: string;
  title: string;
  sectionColor?: string;
  containerColor?: string;
  pinSpacerColor?: string;
  headerColor?: string;
  footerColor?: string;
  margin?: string;
  children: React.ReactNode;
  height?: string;
  className?: string;
}
export interface ContainerProps {
  height?: string; // e.g., '75vh', '500px'
  title?: string;
  subtitle?: string;
  content1?: string;
  content2?: string;
  maxWidth?: string;
  width?: string;
  padding?: string;
  margin?: string;
  textAlign?: "left" | "center" | "right";
  color?: string;
  children?: React.ReactNode;
  backgroundColor?: string;
  justifyContent?: "flex-start" | "center" | "flex-end" | "space-between";
  alignItems?: "flex-start" | "center" | "flex-end";
  key?: string;
  display?: string;
  flexDirection?: "row" | "column";
  flexWrap?: "wrap" | "nowrap" | "wrap-reverse";
  className: string;
  marginBottom?: string;
  minWidth?: string;
  border?: string;
}
// Props for sections of a page, could be used in a layout component
export interface SectionComponentProps {
  section: SectionProps;
  // sectionId: string;
  ref: RefObject<unknown>;
  className: string;
  currentSection: string; // Add this if not already present
  updateSection: (newSection: string) => void;
}

// For components that act as wrappers or spacers
export interface WrapperProps {
  children: React.ReactNode;
  className?: string;
}

export interface PinSpacerProps extends WrapperProps {
  backgroundColor: string;
  justifyContent: "flex-start" | "center" | "flex-end";
  top?: string;
  bottom?: string;
  extraStyle?: CSSProperties;
  currentSection?: string;
  pinSpacerColor?: string;
}

export interface CardProps {
  data: ProjectProps;
}

// Simplified and corrected ShellProps
export interface ShellProps extends WrapperProps {
  display: string;
  flexDirection?: "row" | "column";
  justifyContent?: "flex-start" | "center" | "flex-end" | "space-between";
  alignItems: string;
  padding?: string;
  width?: string;
  height?: string;
  scale?: string;
  currentSection: string;
  className: string;
}

// General props for pages received from routing
export interface PageProps {
  title: string;
  id: string;
  color?: string;
  description?: string;
}

// Props for the main content body that might include multiple sections
export interface BodyContentProps {
  sections: SectionProps[];
  current: React.RefObject<HTMLDivElement>;
}

export interface CommonPageProps {
  section: PageProps;
  currentSection: string;
  sectionId: string;
}

export interface SectionContextState {
  currentSection: string;
  updateSection: (sectionId: string) => void;
}

export interface CommonProps {
  className: string;
}

export interface ImageInfo {
  src: string;
  title: string;
  objectFit?: ObjectFit;
  objectPosition?: ObjectPosition;

  cols?: number;
  rows?: number;
  width?: Width<string | number>;
  height?: Height<string | number>;
  scale?: string;
  backgroundColor?: string;
}

export interface ProjectDetails {
  name: string;
  images: ImageInfo[];
  description: string;
  techno: string[];
  url: string;
  date: string;
  type:string[];
}

export interface PhotoGalleryProps {
  slides: ProjectDetails[];
}
