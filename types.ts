import { ReactNode } from 'react';

export type SectionType = 'lesson' | 'exercise' | 'quiz';

export interface Section {
  id: string;
  category: string; 
  group?: string; // New field for 2nd level grouping (Category -> Group -> Section)
  title: string;
  type: SectionType;
  content?: ReactNode; 
  exerciseData?: ExerciseData;
  quizData?: QuizData;
}

export interface ExerciseData {
  title: string;
  description: string;
  initialCode: string;
  solutionCode: string;
  hints: string[];
}

export interface QuizData {
  title: string;
  questions: QuizQuestion[];
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // Index 0-4
  explanation: string;
}