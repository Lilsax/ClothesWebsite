import React from 'react';
import './App.css';

import Nav from './Componts/Nav/Nav';
import Header from './Componts/Header/Header';
import Clothes from './Componts/ClothesSection/Clothes';
import Promis from './Componts/Promis/Promis';
import SSlider from './Componts/Slider/SSlider';
import Best from './Componts/BestSellers/Best';
import Gram from './Componts/Gram/Gram';
import Footer from './Componts/Footer/Footer';




function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Clothes />
      <Promis />
      <SSlider/>
      <Best />
      <Gram />
      <Footer />
    </div>
  );
}

export default App;
