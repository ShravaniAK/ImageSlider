import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PhotoAlbum from "react-photo-album";
import himg1 from './img/himg1.jpeg';



function App() {
  return (
    <>
     
        <Navbar />
        <Home/>
      
        
    </>
  );
}

export default App;