import { siteTitle } from '@/constants/common';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>{`${siteTitle} - Home`}</title>
      </Head>
      Hello World!
    </>
  );
}
