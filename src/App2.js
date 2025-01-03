import React from 'react'
import Header from './Header'
import Home from './Home'
import  Footer from './Footer'
import ContactUs from './Contactus'
import SocialSection from './socialsection'
import ContactForm from './ContactForm'
import KnowledgeBase from './KnowledgeBase'
import PoemExplorer from './PoemsData'
import './App.css'
import WritingSpace from './WritingSpac'

function App2() {
  return (
    <div  style={{background:'white'}}>
      <Header/>
      <Home/>
      <div className="App2">
      <WritingSpace/>
      <PoemExplorer />
    </div>
    
      <KnowledgeBase/>
      <SocialSection/>
      <ContactForm/>
      <ContactUs/>
      <Footer/>
    </div>
  )
}

export default App2
