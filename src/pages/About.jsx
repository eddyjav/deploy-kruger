import React from 'react'
import { Animals } from '../components/Animals'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'

const About = () => {
      const vaca = {
    titulo: 'Esta es una vaca',
    descrip: 'Esta es la vaca lola',
    detalles: 'Es una vaca lechera',
    img: 'https://toycantando.com/wp-content/uploads/2022/06/Lola_2.png'
  }
  return (
    <>
       
        <Animals {...vaca } />
        
    </>
  )
}

export default About