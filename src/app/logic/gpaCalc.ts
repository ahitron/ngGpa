import { Course } from './courseTypes';
import { levelGradeWeights, lengthCredits } from './gpaTypes';

const coursePoints = ({ level, length, grade }: Course) => {
  return lengthCredits[length] * levelGradeWeights[level][grade];
};

export const totalCredits = (courses: Course[]) =>
  courses.reduce((total, { length }) => total + lengthCredits[length], 0);

export const totalPoints = (courses: Course[]) =>
  courses
    .map((course) => coursePoints(course))
    .reduce((total, points) => total + points, 0);
