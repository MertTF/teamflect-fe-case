import Logo from './Logo';
import Menu from './Menu';

const Header = () => {
  return (
    <div className='flex items-center justify-between bg-white p-4 shadow-[0px_1px_0px_0px_#EFF1F5]'>
      <Logo />
      <Menu />
    </div>
  );
};

export default Header;
