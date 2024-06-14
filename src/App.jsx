import React from 'react';
import SearchHeader from './components/searchHeader.jsx';
import Header from './assets/Header/header';
import About from './assets/About.jsx/About';
import Diplomas from './assets/Diplomas/diplomas';
import ContactMe from './components/contactMe.jsx';
import MySwiper from './components/swiperDiplomas';
import Projetos from './assets/Projetos/projetos';
import './App.css'


function App() {
  return (
    <div className='App'>
      <section id="search-header">
        <SearchHeader/>
      </section>
      <section id="contact-me">
        <ContactMe/>
      </section>
      <section id="header">
        <Header/>
      </section>
      <section id="about">
        <About/>
      </section>
      <section id="diplomas">
        <Diplomas/>
       </section>
       <section id='MySwiper'>
         <MySwiper/> 
      </section> 
      <section id='Projetos'>
        <Projetos id='Projetos'/>
      </section>
    </div> 
  );
}

export default App;
