import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup, ListGroupItem, Nav, Col, Anchor,Navbar } from 'react-bootstrap';
import './style.css'
import Logo from '../../imgs/logo4.png';
import Container from 'react-bootstrap/Container';
import {Image} from 'react-bootstrap'

function TabsExample() {
  return (
    <Navbar className='Cabecalho'>
    <Container>
      <img src={Logo} className='logo'/>
      <Navbar.Brand className='dl' href="#home">DL- Reservas</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link className='dl' href="/">Home</Nav.Link>
        <Nav.Link className='dl2' href="clientes">Contatos</Nav.Link>
        <Nav.Link className='dl2' href="Login">login</Nav.Link>

        
      </Nav>


      <a href="index"><button class="bn7">INTRANET</button></a>
      <ul>
        <li><Anchor href='https://web.whatsapp.com/'><Image className='WhatsLogo' src='https://cdn-icons-png.flaticon.com/512/3536/3536445.png'/></Anchor></li>                            
      </ul>
    </Container>
  </Navbar>
  );
}

export default TabsExample;
