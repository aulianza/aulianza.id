import {
  HiOutlineAcademicCap as EducationIcon,
  HiOutlineBookmark as AboutIcon,
  HiOutlineBriefcase as CareerIcon,
  HiOutlineDocumentText as ResumeIcon,
} from 'react-icons/hi';

import { Tabs } from '@/common/components/elements/Tabs';

import CareerList from './CareerList';
import EducationList from './EducationList';
import Resume from './Resume';
import Story from './Story';

const About = () => {
  const TABS = [
    {
      label: (
        <TabLabel>
          <AboutIcon size={17} /> Intro
        </TabLabel>
      ),
      children: <Story />,
    },
    {
      label: (
        <TabLabel>
          <ResumeIcon size={17} /> Resume
        </TabLabel>
      ),
      children: <Resume />,
    },
    {
      label: (
        <TabLabel>
          <CareerIcon size={17} /> Career
        </TabLabel>
      ),
      children: <CareerList />,
    },
    {
      label: (
        <TabLabel>
          <EducationIcon size={17} /> Education
        </TabLabel>
      ),
      children: <EducationList />,
    },
  ];
  return <Tabs tabs={TABS} />;
};

export default About;

const TabLabel = ({ children }: { children: React.ReactNode }) => (
  <div className='flex items-center justify-center gap-1.5'>{children}</div>
);
