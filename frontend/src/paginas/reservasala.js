import React, { useState, useEffect } from 'react';
import { Container, Row, Form, Button, Dropdown, Col, Image } from 'react-bootstrap';
import { useParams, useNavigate, Link  } from "react-router-dom";
import Cabecalho from '../componentes/cabecalho/cabecalho';
import Rodape from '../componentes/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import reservasService from '../services/reservasService';
import clienteServices from '../services/clientesServices'; 
import ComboSalas from '../componentes/combosalas/combosalas';
import './style.css'



function Reservasala() {
  const { id } = useParams();
  const [reserva, setFormData] = useState({});
  const [selectedValue, setSelectedValue] = useState('');
  const history = useNavigate();

  if (id === 'inserir'){
    var oculto = 'visually-hidden';
  }else{
    var oculto = '';
  }

  
  useEffect(() => {
    

      async function fetchFormData () {
      
      try {        
        
        if (id !== 'inserir') {
        const response = await reservasService.getoneReservas(id);
        setFormData(response.data);
        
        }

      } catch (error) {
        console.error(error);
      }
  
      };
      fetchFormData();
    },[id]); 

   
    

    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        
        alert(event.nativeEvent.submitter.name)
        if (event.nativeEvent.submitter.name === "salvar") {
          alert(id);
          alert(reserva.sala);
          reserva.funcionario = 'WEB - Internet';
          reserva.cliente = 'Internet - WWW';
          reserva.status = 'R'; // indicar sala reservada
          reserva.valortotal = 1;
          if (id === 'inserir') {
              
              await reservasService.postReservas(reserva);
              alert('incluido com sucesso!');
               
          }
          
          else {
              
              await reservasService.putReservas(id,reserva);
              alert('alterado com sucesso!');
              
          }
          
        }else if (event.nativeEvent.submitter.name === "cancela"){
          reserva.status = 'C'; // indicar sala reservada
          await reservasService.putReservas(id,reserva);
            alert('cancelado com sucesso!');
         
        }
      } catch (error) {
        console.error(error);
      }
      history(-1);
    }

    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData({ ...reserva, [name]: value });
    };

    const clienteChange = (event) => {
      const { name, value } = event.target;
      setFormData({ ...reserva, [name]: value });
    };

    const handleSelectChange = (value) => {
      setSelectedValue(value);      
      reserva.sala = value;
    };
  
    
    return (    
  
      <div className='fundoreserva'>
        
          <Cabecalho />

          
        
        

          <div className='formreserva'>
          <Form>
          <Form.Label>CPF:<Form.Control type="number" name="cpf" value={reserva.cpf} onChange={clienteChange}/></Form.Label>
          
          <Form.Label>Nome:<Form.Control type="text" name="nome" value={reserva.nome} onChange={clienteChange}/></Form.Label>
          
          </Form>

          <Link to="/clientesmodal/:id">
          <Button variant='success'>
            CADASTRE-SE
          </Button>
          </Link>

          </div>

          <br></br>
        
          <Form className='formreserva' onSubmit={handleSubmit}>

          <Form.Label>Valor select</Form.Label>
          <Form.Control name='sala' type="text" value={selectedValue} readOnly />

          <ComboSalas onSelectChange={handleSelectChange} />
          <Form.Label className='data'>Agendar data:</Form.Label>
            <Form.Control type="date" name='data' value={reserva.data} onChange={handleChange} />
            <br></br>
            <Form.Label>Numero:</Form.Label>
          <Form.Control type="text" name="numero" value={reserva.numero} onChange={handleChange}/>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Form.Label>Hora inicio:</Form.Label>
          <Form.Control type="number" name="inicio" value={reserva.inicio} onChange={handleChange}/>
          <Form.Label>Hora fim:</Form.Label>
          <Form.Control type="number" name="fim" value={reserva.fim} onChange={handleChange}/>
            <Form.Label>Valor:</Form.Label>
            <Form.Control type="number" name="valor" value={reserva.valor} onChange={handleChange}/>
            <Form.Label>Observação:</Form.Label>
            <Form.Control type="text" name="observacao" value={reserva.observacao} onChange={handleChange}/>
            <br></br>
            
            <Button variant="dark" size='lg' type="submit" name="salvar">
              Salvar
            </Button> 

            <Button className='buttonsalvarcancelar' variant="danger" size='lg' type="submit" name="cancelar" >
              Cancelar
            </Button>
            <Button className={oculto} variant="secondary" size='lg' type="submit" name="cancela" >
              cancel reserv
          </Button>
</Form>
                
        
          <div className='slrslr'>
          <br></br>
          
          
          </div>
            <Rodape/>
              
  
      </div>
    );
  }
  

export default Reservasala;