import React from 'react';
import { Container, Row, Nav, Button } from 'react-bootstrap';
import Cabecalho from '../componentes/cabecalho/cabecalho';
import Cards from '../componentes/Cards/Cards'
import Footer from '../componentes/Footer/Footer'
import Whats from '../componentes/Whatsapp/Whats'
import Reserva from '../componentes/Reserva/Reserva'
import Carousel from '../paginas/Carousel' 
import './style.css'
function Home() {
  return (
    
    <div className='HomeBody'>


      <Cabecalho/>

      
      <Carousel/>
     
      <Reserva/>
      
      
      <Footer/>

    </div>

      )
      };

export default Home;

