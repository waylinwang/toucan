export type FloorTheme = 'walnut_herringbone' | 'natural_chevron' | 'toucan_rainforest';

export interface ThemeConfig {
  id: FloorTheme;
  name: string;
  subtitle: string;
  baseTitle: string;
  revealTitle: string;
  baseImage: string;
  revealImage: string;
  baseDescription: string;
  revealDescription: string;
  badge: string;
}

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  woodSpecies: string;
  dimensions: string;
  wearLayer: string;
  lockingSystem: string;
  ecoStandard: string;
  suitableRooms: string;
  finish: string;
  desc: string;
  highlight: string;
}

export interface ProjectCase {
  id: string;
  title: string;
  category: string;
  location: string;
  area: string;
  flooringUsed: string;
  year: string;
  highlight: string;
}

export interface AcademyArticle {
  id: string;
  title: string;
  category: string;
  readTime: string;
  summary: string;
}
