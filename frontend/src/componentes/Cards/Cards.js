import React from 'react';
import { Container } from 'react-bootstrap';
import Card from '../Card/Card'
import './style.css'

function Cards() {
  return (
     
    <Container fluid className='Cards'>
      <Card
      
        nome={"Sala de luxo"}
        descricao={"esta sala é para você!que gosta de luxo"}
        imgsrc={"https://www.decorfacil.com/wp-content/uploads/2016/12/20161204imagem3.jpg"}
        
      />

        <Card
        
        nome={"Sala economica"}
        descricao={"esta sala é para você!que gosta de economizar"}
        imgsrc={"https://www.decorfacil.com/wp-content/uploads/2016/12/20161204imagem41.jpg"}
        
        />

        <Card
        
        nome={"Sala confort"}
        descricao={"esta sala é para você!que gosta de conforto"}
        imgsrc={"https://www.decorfacil.com/wp-content/uploads/2016/12/20161204imagem58.jpg"}
        />



    </Container>

      )
      };

export default Cards    ;

