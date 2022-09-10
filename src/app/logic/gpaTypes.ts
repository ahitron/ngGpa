import { Grade, Length, Level } from './courseTypes';

type GradeWeightMap = {
  [grade in Grade]: number;
};

type LevelGradeWeightMap = {
  [level in Level]: GradeWeightMap;
};

export const levelGradeWeights: LevelGradeWeightMap = {
  CP: {
    AP: 4.33,
    A: 4.0,
    AM: 3.66,
    BP: 3.33,
    B: 3.0,
    BM: 2.66,
    CP: 2.33,
    C: 2.0,
    CM: 1.66,
    DP: 1.33,
    D: 1.0,
    F: 0.0,
  },
  H: {
    AP: 5.08,
    A: 4.75,
    AM: 4.41,
    BP: 4.08,
    B: 3.75,
    BM: 3.41,
    CP: 3.08,
    C: 2.75,
    CM: 2.41,
    DP: 2.08,
    D: 1.75,
    F: 0.0,
  },
  AP: {
    AP: 5.83,
    A: 5.5,
    AM: 5.16,
    BP: 4.83,
    B: 4.5,
    BM: 4.16,
    CP: 3.83,
    C: 3.5,
    CM: 3.16,
    DP: 2.83,
    D: 2.5,
    F: 0.0,
  },
};

type LengthCreditMap = {
  [length in Length]: number;
};

const creditsPerQuarter = 1.25;

export const lengthCredits: LengthCreditMap = {
  1: 1 * creditsPerQuarter,
  2: 2 * creditsPerQuarter,
  3: 3 * creditsPerQuarter,
  4: 4 * creditsPerQuarter,
};
