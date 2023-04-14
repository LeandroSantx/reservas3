import axios from 'axios';

var salasService = {
  getSalas: async () => {
    var salaAPI = axios.get(`http://localhost:5000/apisala/`);
    return await salaAPI;
  },
  getoneSalas: async (id) => {
    var salaAPI = axios.get(`http://localhost:5000/apisala/`+id);
    return await salaAPI;
  },
  postSalas: async (sala) => {
    var salaAPI = axios.post(`http://localhost:5000/apisala/`,sala);
    return await salaAPI;
  },
  putSalas: async (id,sala) => {
    var salaAPI = axios.put(`http://localhost:5000/apisala/`+ id,sala );
    return await salaAPI;
  },
  deleteSalas: async (id) => {
    var salaAPI = axios.delete(`http://localhost:5000/apisala/`+id);
    return await salaAPI;
  }
};

export default salasService;