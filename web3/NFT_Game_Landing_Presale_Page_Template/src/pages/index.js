
import Navbar from '../components/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Hero from '../components/Hero';
import About from '../components/About';
import Count from '../components/Count';
import Team from '../components/Team';
import Footer from '../components/Footer';
import Partners from '../components/Partners';
import Items from '../components/Items';
import Kits from '../components/Kits';
import React from 'react';
import Head from 'next/head';

function App() {
  return (
    <div className="App">
      <Head>
        <title>Space Doggies NFT Game</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Navbar/>
      <Hero/>
      <About/>
      <Count/>
      <Items/>
      <Kits/>
      <Team/>
      <Partners/>
      <Footer/>
    </div>
  );
}

export default App;
