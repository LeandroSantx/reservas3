import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import './style.css'
function Intranet() {
  
  return (

        <div className="App">
            <header className="Cabecalho">                
                <h1>RESERVAS</h1>
                <nav>
                  <ListGroup>
                    <ListGroupItem>HOME</ListGroupItem>
                    <ListGroupItem>AREA DO CLIENTE</ListGroupItem>
                    <ListGroupItem>CONTATOS</ListGroupItem>
                  </ListGroup>
                </nav>
            </header>            
        </div>          
  );
}

export default Intranet;