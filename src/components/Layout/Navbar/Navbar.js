import Feedback from '@/components/Icons/Feedback';
import Goals from '@/components/Icons/Goals';
import Home from '@/components/Icons/Home';
import OneOnOne from '@/components/Icons/OneOnOne';
import Reports from '@/components/Icons/Reports';
import Surveys from '@/components/Icons/Surveys';
import Vibes from '@/components/Icons/Vibes';
import MenuItem from './MenuItem';

const Navbar = () => {
  return (
    <div className='flex w-20 flex-shrink-0 flex-col items-center pr-3 pt-4 transition-all md:w-60 md:items-stretch'>
      <MenuItem href={'/'} icon={<Home />}>
        Home
      </MenuItem>
      <MenuItem icon={<Surveys />}>Surveys</MenuItem>
      <MenuItem icon={<Feedback />}>Feedback</MenuItem>
      <MenuItem href={'/goals'} icon={<Goals />}>
        Goals
      </MenuItem>
      <MenuItem icon={<OneOnOne />}>1-on-1s</MenuItem>
      <MenuItem icon={<Vibes />}>Good Vibes</MenuItem>
      <MenuItem icon={<Reports />}>Reports</MenuItem>
    </div>
  );
};

export default Navbar;
