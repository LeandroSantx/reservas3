import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams,useNavigate, useLocation } from "react-router-dom";
import Cabecalho from '../componentes/cabecalho/cabecalho';
import Footer from '../componentes/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Figure from 'react-bootstrap/Figure';
import './style.css'
import salasService from '../services/salasServices';


function Salas() {
  const location = useLocation();
  const oculto = location.state.classe; 
  const { id } = useParams();
  const [sala, setFormData] = useState({});
  const history = useNavigate();
  
  useEffect(() => {
      async function fetchFormData () {
      
      try {     
        const response = await salasService.getoneSalas(id);
        setFormData(response.data);

        //const response = await axios.get(`http://localhost:5000/apisala/${id}`);
        //setFormData(response.data);
      } catch (error) {
        console.error(error);
      }
  
      };
      fetchFormData();
    },[id]); 

    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        
        //const id = event.target._id.value;
        if (event.nativeEvent.submitter.name === "salvar") {
          alert(id);
          if (id === ":id") {
            
              await salasService.postSalas(sala);
              alert('incluido com sucesso!'); 
          }
          else {

              await salasService.putSalas(id,sala);
              alert('alterado com sucesso!');
              
          }
        }
      } catch (error) {
        console.error(error);
      }
      history(-1);
    }

    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData({ ...sala, [name]: value });
    };
  
  
  return (    
    <Container className='fundomodal' fluid >

        <Cabecalho />

        <br></br>

      <Row>
      <Col>
        <Form onSubmit={handleSubmit} className='form2'>

        <Form.Group as={Row} className="me-2" controlId="formBasicEmail">
          <Form.Label>Nome:</Form.Label>
          <Col sm={8}>
          <Form.Control type="text" placeholder="" name="nome" value={sala.nome} onChange={handleChange}/>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="me-2" controlId="formBasicEmail">
          <Form.Label>Tipo:</Form.Label>
          <Col sm={8}>
          <Form.Control type="text" placeholder="" name="tipo" value={sala.tipo} onChange={handleChange}/>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="me-2" controlId="formBasicPassword">
          <Form.Label>Capacidade da Sala:</Form.Label>
          <Col sm={8}>
          <Form.Control type="text" placeholder="" name="capacidade" value={sala.capacidade} onChange={handleChange}/>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="me-2" controlId="formBasicPassword">
          <Form.Label>Valor da Sala:</Form.Label>
          <Col sm={8}>
          <Form.Control type="text" placeholder="" name="valor" value={sala.valor} onChange={handleChange}/>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="me-2" controlId="formBasicPassword">
          <Form.Label>Link da imagem da Sala:</Form.Label>
          <Col sm={8}>
          <Form.Control type="text" name="img" value={sala.img} onChange={handleChange}/>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="me-2" controlId="formBasicEmail">
          <Form.Label>Descrição:</Form.Label>
          <Col sm={8}>
          <Form.Control type="textarea" placeholder="" name="descricao" value={sala.descricao} onChange={handleChange}/>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="me-2" controlId="formBasicPassword">
          <Form.Label>Número da Sala:</Form.Label>
          <Col sm={8}>
          <Form.Control type="text" placeholder="" name="numero" value={sala.numero} onChange={handleChange}/>
          </Col>
        </Form.Group>

        

        
        

        <Form.Group as={Row} className="me-2" controlId="formBasicCheckbox">
    
        <br></br>
        </Form.Group>
        <Button className={oculto} variant="dark" size='lg' type="submit" name="salvar">
          SALVAR
        </Button>
        <Button className={oculto} variant="dark" size='lg' type="submit" name="cancelar">
          CANCELAR
        </Button>
      </Form>
      </Col>
      <Col sm={7}>
      <Figure>
          <Figure.Image rounded
            width={1500}
            height={900}
            alt="img"
            
            src={sala.img}
          />
        </Figure>
      </Col>
      </Row>
     
      <Footer/>
    </Container>
  );
}

export default Salas;