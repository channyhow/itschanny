// src/types/pageComponents.ts
import React from 'react';
import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects/Projects';
import Contact from '../pages/Contact';
import { CommonPageProps } from '.';

export type PageComponent = React.ComponentType<CommonPageProps>;

export interface PageContentMap {
  [key: string]: PageComponent;
}

export const PageContent: PageContentMap = {
  Home,
  About,
  Projects,
  Contact
};