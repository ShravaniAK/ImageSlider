import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
// import image1 from '../img/image1.png'

function HeroSection() {
  return (
    <div className='hero-container'>
      <img style={{width:'100vw'}} src={require('../img/bghr1.png')} alt="image1" />
      <h1> DARSHBIOTECH  </h1>
      <p>Natural Products</p>
      <div className='hero-btns'>
       
        
      </div>
    </div>
  );
}

export default HeroSection;