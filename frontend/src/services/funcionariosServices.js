import axios from 'axios';

var funcService = {
  getFunc: async () => {
    var funcAPI = axios.get(`http://localhost:5000/apifuncionario/`);
    return await funcAPI;
  },
  getoneFunc: async (id) => {
    var funcAPI = axios.get(`http://localhost:5000/apifuncionario/`+id);
    return await funcAPI;
  },
  postFunc: async (Funcionarios) => {
    var funcAPI = axios.post(`http://localhost:5000/apifuncionario/`,Funcionarios);
    return await funcAPI;
  },
  putFunc: async (id,Funcionarios) => {
    var funcAPI = axios.put(`http://localhost:5000/apifuncionario/`+ id,Funcionarios );
    return await funcAPI;
  },
  deleteFunc: async (id) => {
    var funcAPI = axios.delete(`http://localhost:5000/apifuncionario/`+id);
    return await funcAPI;
  }
};

export default funcService;