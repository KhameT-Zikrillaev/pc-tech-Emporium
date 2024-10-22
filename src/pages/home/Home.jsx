import React from 'react'
import './home.css'
import Intro from './sections/intro'
import Corpuse from './sections/corpuse'
import Assembling from './sections/assembling'
import Topcomping from './sections/topcomping'
import Client from './sections/client'
import About from './sections/about'
import Sale from './sections/sale'
import Trust from './sections/trust'
import Formsend from './sections/formsend'


export default function Home() {
  return (
    <div>
      <Intro/>
      <Corpuse/>
      <Assembling/>
      <Topcomping/>
      <About/>
      <Sale/>
      <Client/>
      
      
      <Trust/>
      
      <Formsend/>
     
    </div>
  )
}
