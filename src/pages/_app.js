import '@/styles/globals.css';
import 'react-toastify/dist/ReactToastify.min.css';

import Layout from '@/components/Layout';
import { Inter } from 'next/font/google';
import { ToastContainer } from 'react-toastify';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export default function App({ Component, pageProps }) {
  return (
    <Layout className={`${inter.variable} font-sans`}>
      <Component {...pageProps} />
      <ToastContainer />
    </Layout>
  );
}
