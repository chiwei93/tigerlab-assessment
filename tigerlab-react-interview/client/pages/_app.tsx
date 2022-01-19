import '../styles/globals.css';
import type { AppProps } from 'next/app';

import Layout from '../components/Layouts/Layout';
import { SidebarContextProvider } from '../context/sidebarContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SidebarContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SidebarContextProvider>
  );
}

export default MyApp;
