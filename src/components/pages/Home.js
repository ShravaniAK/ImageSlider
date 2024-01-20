import React from 'react';
import '../../App.css';

import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Info from '../Info';
import himg1 from '../../img/himg1.jpeg';
import himg2 from '../../img/himg2.jpeg';
import himg3 from '../../img/himg3.jpeg';
import himg4 from '../../img/himg4.jpeg';
import himg5 from '../../img/himg5.jpeg';
import himg6 from '../../img/himg6.jpeg';
import himg7 from '../../img/himg7.jpeg';
import himg8 from '../../img/himg8.jpeg';
import himg9 from '../../img/himg9.jpeg';
import himg10 from '../../img/himg10.jpeg';
import himg11 from '../../img/himg11.jpeg';
import himg12 from '../../img/himg12.jpeg';
import himg13 from '../../img/himg13.jpeg';
import himg14 from '../../img/himg14.jpeg';
import himg15 from '../../img/himg15.jpeg';
import himg16 from '../../img/himg16.jpeg';
import himg17 from '../../img/himg17.jpeg';
import himg18 from '../../img/himg18.jpeg';
import himg19 from '../../img/himg19.jpeg';
import himg20 from '../../img/himg20.jpeg';
import himg21 from '../../img/himg21.jpeg';
import himg22 from '../../img/himg22.jpeg';

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Gallery } from "react-grid-gallery";
 

function Home() {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <HeroSection />
      <Info/>
      <button style={{display:'flex', justifyContent:'center', alignItems:'center', margin:'2rem auto',padding:'1rem', borderRadius:'1rem' }} type="button" onClick={() => setOpen(true)}>
       Show Images
      </button>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[
          { src: himg1},
          { src: himg2},
          { src: himg3},
          { src: himg4},
          { src: himg5},
          { src: himg6},
          { src: himg7},
          { src: himg8},
          // { src: himg9},
          { src: himg10},
          { src: himg11},
          { src: himg12},
          { src: himg13},
          { src: himg14},
          { src: himg15},
          { src: himg16},
          { src: himg17},
          { src: himg18},
          // { src: himg19},
          { src: himg20},
          { src: himg21},
          { src: himg22},
         
         
        ]}
      />

      <Footer />
    </>
  );
}

export default Home;