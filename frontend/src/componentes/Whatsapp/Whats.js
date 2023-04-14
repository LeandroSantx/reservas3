import React from 'react';
import {
  Anchor,
  Image,
  Container
} from 'react-bootstrap';
import './style.css'

function Whats() {
  return (
    <Container className='Whats'>  
            <ul>
        <li><Anchor href='whats'><Image className='WhatsLogo' src='https://cdn-icons-png.flaticon.com/512/3536/3536445.png'/></Anchor></li>                            
      </ul>
        
    </Container>
  );


}

export default Whats;