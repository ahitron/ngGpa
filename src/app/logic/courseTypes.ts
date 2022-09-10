// Levels

export const levels = ['CP', 'H', 'AP'] as const;
export type Level = typeof levels[number];

type LevelDisplayMap = {
  [level in Level]: string;
};

export const levelDisplays: LevelDisplayMap = {
  CP: 'CP/Basic',
  H: 'Honors',
  AP: 'AP',
};

// Lengths

export const lengths = ['1', '2', '3', '4'] as const;
export type Length = typeof lengths[number];

type LengthDisplayMap = {
  [length in Length]: string;
};

export const lengthDisplays: LengthDisplayMap = {
  1: 'Quarter',
  2: 'Semester',
  3: 'Three Quarters',
  4: 'Full Year',
};

// Grades

export const grades = [
  'AP',
  'A',
  'AM',
  'BP',
  'B',
  'BM',
  'CP',
  'C',
  'CM',
  'DP',
  'D',
  'F',
] as const;
export type Grade = typeof grades[number];

type GradeDisplayMap = {
  [grade in Grade]: string;
};

export const gradeDisplays: GradeDisplayMap = {
  AP: 'A+',
  A: 'A',
  AM: 'A-',
  BP: 'B+',
  B: 'B',
  BM: 'B-',
  CP: 'C+',
  C: 'C',
  CM: 'C-',
  DP: 'D+',
  D: 'D',
  F: 'F',
};

// Years

export const years = ['9', '10', '11', '12'] as const;
export type Year = typeof years[number];

type YearDisplayMap = {
  [year in Year]: string;
};

export const yearDisplays: YearDisplayMap = {
  9: '9',
  10: '10',
  11: '11',
  12: '12',
};

// Course

export interface Course {
  id?: string;
  name: string;
  level: Level;
  length: Length;
  grade: Grade;
  year: Year;
}
