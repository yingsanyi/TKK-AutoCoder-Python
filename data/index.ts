
import { Section } from '../types';
import { pythonEnv } from './modules/python_env';
import { pythonAnalysis } from './modules/python_analysis';
import { pythonTools } from './modules/python_tools';
import { pythonViz } from './modules/python_viz';
import { pythonScraper } from './modules/python_scraper';

export const sections: Section[] = [
  ...pythonEnv,
  ...pythonAnalysis,
  ...pythonTools,
  ...pythonViz,
  ...pythonScraper
];
