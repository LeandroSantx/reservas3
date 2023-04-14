import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
function CardOne({nome,descricao,imgsrc}) {
  
  return (

    <Card style={{ width: '23rem' }}>
        <Card.Img variant="top" src={imgsrc} />
        <Card.Body>
            <Card.Title>{nome}</Card.Title>
            <Card.Text>
                {descricao}
            </Card.Text>
        </Card.Body>
     </Card>

  );
}

export default CardOne;