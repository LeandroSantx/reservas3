import React from 'react';
import { Container, Row, Nav, Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Cabecalho from '../componentes/cabecalho/cabecalho';
import Footer from '../componentes/Footer/Footer';
import Func from '../imgs/funcii.png';
import Client from '../imgs/cliente3.png';
import Sla from '../imgs/salas.png';
import Hosmi from '../imgs/usuario.png';
import './style.css'
 
function Index() {
  return (
    
    <div className='index'>


      <Cabecalho/>

        <br></br>


        <div>
      <Link to={'/funcionarios'}><img src={Func} className='imgindex'/></Link>
      <Link to={'/clientes'}><img src={Client} className='imgindex'/></Link>
      </div>

        <br></br>

      <div>
      <Link to={'/sala'}><img src={Sla} className='imgindex2'/></Link>
      <Link to={'/usuario'}><img src={Hosmi} className='imgindex2'/></Link>
      </div>
      

        <br></br>

      <Footer/>

    </div>

      )
      };

export default Index;