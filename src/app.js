import React from 'react';

import { Footer, Blog, Possibility, Features, whatGPT3, Header } from './containers';
import { CTA, Brand, Navbar } from './components';

const app = () => {
  return (
    <div className='App'>
    <div className='gradient__bg'>  
      <Navbar />
      <Header />
    </div>
      <Brand />
      <Features />
      <Possibility />
      <Blog />
      <whatGPT3 />
      <CTA />
      <Footer />
    </div>
  )
}

export default app
