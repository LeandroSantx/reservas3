import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './App.css';
import Clientes from './paginas/clientes';
import Funcionarios from './paginas/funcionarios';
import Home from './paginas/home';
import Salas from './paginas/salas';
import Index from './paginas/index';
import Sala from './paginas/sala';
import Clientesmodal from './paginas/clientesmodal';
import Funcionariosmodal from './paginas/funcionariosmodal';
import Reservas from './paginas/reservas';
import Reservasmodal from './paginas/reservasmodal';
import Reservasala from './paginas/reservasala';


function App() {
  return (
    

    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/clientes" element={<Clientes/>} />
          <Route path="/funcionarios" element={<Funcionarios/>} />
          <Route path="/salas/:id" element={<Salas/>} />
          <Route path="/index" element={<Index/>} />
          <Route path="/sala" element={<Sala/>} />
          <Route path="/clientesmodal/:id" element={<Clientesmodal/>} />
          <Route path="/funcionariosmodal/:id" element={<Funcionariosmodal/>} />
          <Route path="/reservas" element={<Reservas/>} />
          <Route path="/reservasmodal/:id" element={<Reservasmodal/>} />
          <Route path="/reservassala" element={<Reservasala/>} />
          <Route path="/reservassala/:id" element={<Reservasala/>} />
        </Routes>
      </BrowserRouter>    
      


  );
}

export default App;
