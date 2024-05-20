import React from 'react'
import './App.css'
import Header from './assets/Header/header'
import About from './assets/About.jsx/About'
import Diplomas from './assets/Diplomas/diplomas'
import SearchHeader from './assets/searchHeader/searchHeader'


function App() {

  return (
   <div className='App'>
    <SearchHeader/>
      <Header/>
      <About/>
      <Diplomas/>
   </div>
  )
}

export default App
