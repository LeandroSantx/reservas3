import axios from 'axios';

var clienteService = {
  getCliente: async () => {
    var clienteAPI = axios.get(`http://localhost:5000/apiclientes/`);
    return await clienteAPI;
  },
  getoneCliente: async (id) => {
    var clienteAPI = axios.get(`http://localhost:5000/apiclientes/`+id);
    return await clienteAPI;
  },
  postCliente: async (Clientes) => {
    var clienteAPI = axios.post(`http://localhost:5000/apiclientes/`,Clientes);
    return await clienteAPI;
  },
  putCliente: async (id,Clientes) => {
    var clienteAPI = axios.put(`http://localhost:5000/apiclientes/`+ id,Clientes);
    return await clienteAPI;
  },
  deleteCliente: async (id) => {
    var clienteAPI = axios.delete(`http://localhost:5000/apiclientes/`+id);
    return await clienteAPI;
  }
};

export default clienteService;