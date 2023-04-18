import {React, useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Carousel, Container, Image, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './style.css'

function Carrossel() {

    const [carrosselData, setCarrosselData] = useState([]);
  
    useEffect(() => {
      async function fetchCarrosselData () {
      
      try {
        
        const response = await axios.get('http://localhost:5000/apisala');
        setCarrosselData(response.data);
        console.log('data' + carrosselData);
        console.log('response' + response);
      } catch (error) {
        console.error(error);
      }
  
      };
      fetchCarrosselData();
    },[carrosselData]);

    return (
      <Container fluid className='carrossel'>
    
        
        
       
                    <Carousel>        
                        {
                        carrosselData.map((item, index) => (

                       
                        <Carousel.Item key={item.id}>
                          <Link to={`/salas/${item._id}`} state={{classe:'visually-hidden'}} >
                           <Card.Img key={index} src={item.img} alt="" className='image'/>
                          </Link>
                        
                        <Carousel.Caption className='carrosselTexto'>
                          <div className='imgLetras'>
                          <h3 >{item.nome}</h3>    
                          <p>{item.descricao}</p>
                          </div>
                        </Carousel.Caption>
                        </Carousel.Item>
                      
                        ))
                        }
                    </Carousel>
       


        </Container>

    );
  }
  
  export default Carrossel;