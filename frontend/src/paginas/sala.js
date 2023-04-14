import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Button, Image, Table } from 'react-bootstrap';
import Cabecalho from '../componentes/cabecalho/cabecalho';
import Footer from '../componentes/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import salasService from '../services/salasServices';

function Sala() {
  
  const [tableData, setTableData] = useState([]);
  
  useEffect(() => {
      async function fetchTableData () {
      
      try {
        
        const response = await salasService.getSalas();
        setTableData(response.data);
      } catch (error) {
        console.error(error);
      }
  
      };
      fetchTableData();
    },[tableData]); 
    
    async function handleDelete(id) {
      var confirma = window.confirm("deseja apagar?")
      if (confirma){
      try {
             await salasService.deleteSalas(id);
            alert('deletado com sucesso!');
      } catch (error) {
        console.error(error);
      }  
    }    
    }
  
  return (    

    <Container className='fundosala' fluid>
      <Row>
        
        <Cabecalho />
        
      </Row>
     
      <Row>
        
                <div className="table-container">
                    <div className="shadow bg-light border-primary text-center">
                        <h2>Salas</h2>
                    </div>
                    <Table variant='dark' responsive striped bordered hover>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Tipo</th>
                                <th>Capacidade</th>
                                <th>Valor</th>
                                <th>Descricao</th>
                                <th>Numero</th>
                                <th>Editar</th>
                                <th>Apagar</th>
                                
                                
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((row, index) => {
                                return (
                            <tr key={index} data-toggle="tooltip" title={row.cep}>
                                <td>{row.nome}</td>
                                <td>{row.tipo}</td>
                                <td>{row.capacidade}</td>
                                <td>{row.valor}</td>
                                <td>{row.descricao}</td>
                                <td>{row.numero}</td>
                                
                                
                                <td>
                                  <Link to={`/salas/${row._id}`} >
                                    <Image
                                          src="https://cdn-icons-png.flaticon.com/512/1159/1159633.png"
                                          alt="editar"
                                          className="rounded-circle"
                                          width="30"
                                          height="30"
                                    />
                                  </Link>
                                </td>
                                <td>
                                    <Image 
                                      src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png"
                                      alt="apagar"
                                      className="rounded-circle"
                                      width="30"
                                      height="30"
                                      onClick={() =>handleDelete(row._id) } 
                                    />
                                </td>
                            </tr>
                            );
                            })}
                        </tbody>
                  
      
        <Row>
       
          <Link to="/salas/:id">
          <Button>
            <Image
              src="https://cdn-icons-png.flaticon.com/512/4315/4315609.png"
              alt="Incluir"
              className="rounded-circle"
              width="30"
              height="30"
            />
          </Button>
          </Link>
        </Row>
        </Table>
        </div>

      </Row>  
      <Row className='slrslr'>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        </Row>          
      <Footer/>
    </Container>
  );
}
//teste

export default Sala;