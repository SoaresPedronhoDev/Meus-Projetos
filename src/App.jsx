import React from 'react';
import SearchHeader from './components/SearchHeader/searchHeader.jsx';
import Header from './components/Header/header';
import About from './components/About.jsx/About';
import Diplomas from './components/Diplomas/diplomas';
import ContactMe from './components/ContactMe/contactMe.jsx';
import MySwiper from './components/Swipper/swiperDiplomas.jsx';
import Projetos from './components/Projetos/projetos';
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
