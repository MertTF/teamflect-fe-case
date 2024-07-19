import Help from '@/components/Icons/Help';
import Settings from '@/components/Icons/Settings';
import MenuItem from './MenuItem';

const Menu = () => {
  return (
    <div className='flex items-center gap-2'>
      <MenuItem title='Help' icon={<Help />} hideTooltip />
      <MenuItem title='Settings' icon={<Settings />} />
    </div>
  );
};

export default Menu;
