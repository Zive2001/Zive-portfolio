import '../styles/globals.css';


//componenets

import Layout from '../components/Layout';
import Transition from '../components/Transition'

//router
import { useRouter } from 'next/router';

//framer motion
import {AnimatePresence, motion} from 'framer-motion'

function MyApp({ Component, pageProps }) {

const router =useRouter();

  return <Layout>
    <AnimatePresence mode='wait'>
      <div>
        <motion.div key={router.route} className='h-full'>
        <Transition>
        <Component {...pageProps} />

        </Transition>

        </motion.div>
       
 
      </div>
    
    </AnimatePresence>
  </Layout>
  
}

export default MyApp;
