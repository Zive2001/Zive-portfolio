import '../styles/globals.css';


//componenets

import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return <Layout>
    <Component {...pageProps} />
  </Layout>
  
}

export default MyApp;
