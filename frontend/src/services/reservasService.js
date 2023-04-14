import axios from 'axios';

var reservasService = {
  getReservas: async () => {
    var reservasAPI = axios.get(`http://localhost:5000/apireserva/`);
    return await reservasAPI;
  },
  getoneReservas: async (id) => {
    var reservasAPI = axios.get(`http://localhost:5000/apireserva/`+id);
    return await reservasAPI;
  },
  postReservas: async (Reservas) => {
    var reservasAPI = axios.post(`http://localhost:5000/apireserva/`,Reservas);
    return await reservasAPI;
  },
  putReservas: async (id,Reservas) => {
    var reservasAPI = axios.put(`http://localhost:5000/apireserva/`+ id,Reservas);
    return await reservasAPI;
  },
  deleteReservas: async (id) => {
    var reservasAPI = axios.delete(`http://localhost:5000/apireserva/`+id);
    return await reservasAPI;
  }
};

export default reservasService;