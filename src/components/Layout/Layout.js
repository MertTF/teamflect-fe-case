import { siteTitle } from '@/constants/common';
import clsx from 'clsx';
import Head from 'next/head';
import Header from './Header';
import Navbar from './Navbar';

const Layout = ({ className, children }) => {
  return (
    <div className={clsx('flex min-h-screen flex-col', className)}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Header />
      <div className='relative flex flex-1'>
        <Navbar />
        <div className='w-[calc(100%-80px)] bg-white-smoke p-4 md:w-[calc(100%-240px)] lg:p-8'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
