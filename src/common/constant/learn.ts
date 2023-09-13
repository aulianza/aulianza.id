import { ContentProps } from '../types/learn';

export const LEARN_CONTENTS: ContentProps[] = [
  {
    id: 1,
    title: 'Problem Solving',
    slug: 'problem-solving',
    description:
      'Learn problem solving in JavaScript with detailed explanations.',
    image:
      'https://aulianza.s3.ap-southeast-1.amazonaws.com/images/learn/learn-problem-solving.png',
    is_new: false,
    level: 'All Levels',
    is_show: true,
    is_sort: false,
  },
  {
    id: 2,
    title: 'JavasScript Fundamental',
    slug: 'js-fundamental',
    description: 'Master the fundamentals of programming in JavaScript.',
    image:
      'https://aulianza.s3.ap-southeast-1.amazonaws.com/images/learn/javascript.webp',
    is_new: true,
    level: 'Beginner',
    is_show: true,
    is_sort: false,
  },
];
