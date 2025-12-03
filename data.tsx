
import { Section } from './types';
import { pythonEnv } from './data/modules/python_env';
import { pythonAnalysis } from './data/modules/python_analysis';
import { pythonTools } from './data/modules/python_tools';
import { pythonViz } from './data/modules/python_viz';
import { pythonScraper } from './data/modules/python_scraper';

// This file aggregates all Python content modules.
// It replaces the previous C++ content.
export const sections: Section[] = [
  ...pythonEnv,
  ...pythonAnalysis,
  ...pythonTools,
  ...pythonViz,
  ...pythonScraper
];
