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
import './style.css';
import funcService from '../services/funcionariosServices';


function Funcionariosmodal() {
    
    const { id } = useParams();
    const [Funcionarios, setFormData] = useState({});
    const history = useNavigate();
    
    useEffect(() => {
        async function fetchFormData () {
        
        try {        
          const response = await funcService.getoneFunc(id);
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
              
                await funcService.postFunc(Funcionarios)
                alert('incluido com sucesso!'); 
            }
            else {
            
                await funcService.putFunc(id,Funcionarios)
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
        setFormData({ ...Funcionarios, [name]: value });
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
            <Form.Control type="text" placeholder="" name="cpf" value={Funcionarios.cpf} onChange={handleChange}/>
            </Col>
          </Form.Group>
  
          <Form.Group as={Row} className="me-2" controlId="formBasicEmail">
            <Form.Label>Nome:</Form.Label>
            <Col sm={8}>
            <Form.Control type="text" placeholder="" name="nome" value={Funcionarios.nome} onChange={handleChange}/>
            </Col>
          </Form.Group>
  
          <Form.Group as={Row} className="me-2" controlId="formBasicPassword">
            <Form.Label>CEP:</Form.Label>
            <Col sm={8}>
            <Form.Control type="text" placeholder="" name="cep" value={Funcionarios.cep} onChange={handleChange}/>
            </Col>
          </Form.Group>        
  
          <Form.Group as={Row} className="me-2" controlId="formBasicPassword">
            <Form.Label>TELEFONE:</Form.Label>
            <Col sm={8}>
            <Form.Control type="text" placeholder="" name="tel" value={Funcionarios.tel} onChange={handleChange}/>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="me-2" controlId="formBasicPassword">
            <Form.Label>EMAIL:</Form.Label>
            <Col sm={8}>
            <Form.Control type="text" placeholder="" name="email" value={Funcionarios.email} onChange={handleChange}/>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="me-2" controlId="formBasicPassword">
            <Form.Label>FUNCÃO:</Form.Label>
            <Col sm={8}>
            <Form.Control type="text" placeholder="" name="funcao" value={Funcionarios.funcao} onChange={handleChange}/>
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

export default Funcionariosmodal;