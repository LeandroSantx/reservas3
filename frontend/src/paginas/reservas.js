import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Button, Image, Table } from 'react-bootstrap';
import Cabecalho from '../componentes/cabecalho/cabecalho';
import Footer from '../componentes/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import reservasService from '../services/reservasService';

function Reservas() {
  
  const [tableData, setTableData] = useState([]);
  
  useEffect(() => {
      async function fetchTableData () {
      
      try {
        
        const response = await reservasService.getReservas();
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
             await reservasService.deleteReservas(id);
            alert('deletado com sucesso!');
      } catch (error) {
        console.error(error);
      }  
    }    
    }
  
  return (    

    <Container fluid>
      <Row>
        
        <Cabecalho />
        
      </Row>
     
      <Row>
        
                <div className="table-container">
                    <div className="shadow bg-light border-primary text-center">
                        <h2>Reservas</h2>
                    </div>
                    <Table responsive striped bordered hover>
                        <thead>
                            <tr>
                                <th>Número</th>
                                <th>Sala</th>
                                <th>Cliente</th>
                                <th>Data</th>
                                <th>Inicio</th>
                                <th>Fim</th>
                                <th>Valor</th>
                                <th>Valor Total</th>
                                <th>Observação</th>
                                <th>Status</th>
     
                                
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((row, index) => {
                                return (
                            <tr key={index} data-toggle="tooltip" title={row.numero}>
                                <td>{row.numero}</td>
                                <td>{row.sala}</td>
                                <td>{row.cliente}</td>
                                <td>{row.data}</td>
                                <td>{row.inicio}</td>
                                <td>{row.fim}</td>
                                <td>{row.valor}</td>
                                <td>{row.valortotal}</td>
                                <td>{row.observacao}</td>
                                <td>{row.status}</td>

                             
                                
                                
                                <td>
                                  <Link to={`/reservasmodal/${row._id}`} >
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
       
          <Link to="/reservasmodal/:id">
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
        <Footer/>
    </Container>
  );
}

export default Reservas;