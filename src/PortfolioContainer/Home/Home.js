import React from 'react'
import Profile from './Profile/Profile'
import Footer from './Footer/Footer'
import School from './School/School'
import Skills from './Skills/Skills'
import Contact from './Contact/Contact'
import './Home.css'

export default function Home() {
  return (
    <div>
      

<div className='header-container'>
        <Profile/>
        <Footer/>

    </div>
  <div className='second-container'></div>
    <School />
    <Skills />
    <Contact />
    </div>
  )
}
