import { ContentProps } from '../types/learn';

export const LEARN_CONTENTS: ContentProps[] = [
  {
    id: 1,
    title: 'Problem Solving',
    slug: 'problem-solving',
    description:
      'Unleash the Power of Problem Solving Skill for Software Engineers',
    image:
      'https://aulianza.s3.ap-southeast-1.amazonaws.com/images/projects/aulianza-next-tailwind-starter-new.png',
    is_new: true,
    level: 'all-levels',
    is_show: true,
  },
  {
    id: 2,
    title: 'JavasScript for Beginners',
    slug: 'js-beginners',
    description: 'Unleash the Power of JavaScript Skill for Beginners',
    image:
      'https://aulianza.s3.ap-southeast-1.amazonaws.com/images/projects/aulianza-next-tailwind-starter-new.png',
    is_new: false,
    level: 'beginner',
    is_show: false,
  },
];
