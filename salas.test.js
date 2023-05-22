const SalaController = require('../controllers/salas');
const SalaModel = require('../models/salas');

jest.mock('../models/salas');

describe('SalaController', () => {
  describe('getoneSala', () => {
    it('deve retornar uma sala específica', async () => {
      const salaId = '6414c6100dbd5838b52ff7fe';
      
      const salaMock = { 
        "_id": {
          "$oid": "6414c6100dbd5838b52ff7fe"
        },
        "nome": " Sala Confort",
        "tipo": "confort",
        "capacidade": 10,
        "valor": 1300,
        "img": "https://www.flowork.com.br/wp-content/uploads/2017/08/conheca-as-salas-de-reuniao-perfeitas-pro-seu-negocio-flowork-escritorios-mobiliados-green-office-moinhos-de-vento-porto-alegre-rs-05-1.jpg",
        "descricao": "Sala confortavel",
        "numero": 2 };
      
      SalaModel.SalaModel.findById.mockResolvedValue(salaMock);

      //const salaController = new SalaController();

      const req = { params: { id: salaId } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await SalaController.getoneSala(req, res);

      expect(SalaModel.SalaModel.findById).toHaveBeenCalledWith(salaId);
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith(salaMock);
    });

    it('deve retornar erro 400 ao nao encontrar uma sala específica', async () => {
      const salaId = '********';
      
      const salaMock = { 
        "_id": {
          "$oid": "6414c6100dbd5838b52ff7fe"
        },
        "nome": " Sala Confort",
        "tipo": "confort",
        "capacidade": 10,
        "valor": 1300,
        "img": "https://www.flowork.com.br/wp-content/uploads/2017/08/conheca-as-salas-de-reuniao-perfeitas-pro-seu-negocio-flowork-escritorios-mobiliados-green-office-moinhos-de-vento-porto-alegre-rs-05-1.jpg",
        "descricao": "Sala confortavel",
        "numero": 2 };
      
      SalaModel.SalaModel.findById.mockResolvedValue(salaId);

      //const salaController = new SalaController();

      const req = { params: { id: salaId } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await SalaController.getoneSala(req, res);

      expect(SalaModel.SalaModel.findById).toHaveBeenCalledWith(salaId);
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith(salaId);
    });
    
  });

});
