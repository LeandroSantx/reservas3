import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams,useNavigate } from "react-router-dom";
import Cabecalho from '../componentes/cabecalho/cabecalho';
import Footer from '../componentes/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Figure from 'react-bootstrap/Figure';
import './style.css'


function Clientesmodal() {
   
  const { id } = useParams();
  const [Clientes, setFormData] = useState({});
  const history = useNavigate();
  
  useEffect(() => {
      async function fetchFormData () {
      
      try {        
        const response = await axios.get(`http://localhost:5000/apiclientes/${id}`);
        setFormData(response.data);
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
            
              await axios.post('http://localhost:5000/apiclientes',Clientes );
              alert('incluido com sucesso!'); 
          }
          else {
              alert("teste")
              await axios.put(`http://localhost:5000/apiclientes/${id}`,Clientes );
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
      setFormData({ ...Clientes, [name]: value });
    };
  
  
  return (    
    <Container className='fundomodal' fluid >

        <Cabecalho />

        <br></br>

      <Row>
      <Col>
        <Form onSubmit={handleSubmit} className='form2'>

        <Form.Group as={Row} className="me-2" controlId="formBasicEmail">
          <Form.Label>CPF:</Form.Label>
          <Col sm={8}>
          <Form.Control type="text" placeholder="" name="cpf" value={Clientes.cpf} onChange={handleChange}/>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="me-2" controlId="formBasicEmail">
          <Form.Label>Nome:</Form.Label>
          <Col sm={8}>
          <Form.Control type="text" placeholder="" name="nome" value={Clientes.nome} onChange={handleChange}/>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="me-2" controlId="formBasicPassword">
          <Form.Label>CEP:</Form.Label>
          <Col sm={8}>
          <Form.Control type="text" placeholder="" name="cep" value={Clientes.cep} onChange={handleChange}/>
          </Col>
        </Form.Group> 

        <Form.Group as={Row} className="me-2" controlId="formBasicPassword">
          <Form.Label>TELEFONE:</Form.Label>
          <Col sm={8}>
          <Form.Control type="text" placeholder="" name="tel" value={Clientes.tel} onChange={handleChange}/>
          </Col>
        </Form.Group> 

        <Form.Group as={Row} className="me-2" controlId="formBasicPassword">
          <Form.Label>EMAIL:</Form.Label>
          <Col sm={8}>
          <Form.Control type="text" placeholder="" name="email" value={Clientes.email} onChange={handleChange}/>
          </Col>
        </Form.Group>      

        <Form.Group as={Row} className="me-2" controlId="formBasicCheckbox">
    
        <br></br>
        </Form.Group>
        <Button variant="dark" size='lg' type="submit" name="salvar">
          SALVAR
        </Button>
      </Form>
      </Col>

      </Row>

      <Footer/>
    </Container>
  );
}

export default Clientesmodal;