export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  highlights: string[];
  image: string;
  slug: string;
  problemSolved?: string;
  technicalImpact?: string;
  architectureSteps?: string[];
  challenges?: string[];
  results?: string[];
}
