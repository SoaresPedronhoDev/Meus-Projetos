import React from 'react';
import SearchHeader from './assets/components/searchHeader';
import Header from './assets/Header/header';
import About from './assets/About.jsx/About';
import Diplomas from './assets/Diplomas/diplomas';
import ContactMe from './assets/components/contactMe'; 
import './App.css'

function App() {
  return (
    <div className='App'>
      <SearchHeader/>
      <ContactMe/>
        <Header/>
        <About/>
        <Diplomas/>
    </div>
  );
}

export default App;
