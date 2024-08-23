import React from 'react';

import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
import { CTA, Brand, Navbar } from './components';
import './app.css'

const App = () => {
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
      <WhatGPT3 />
      <CTA />
      <Footer />
    </div>
  )
}

export default App;
