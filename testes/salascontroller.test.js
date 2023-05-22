const salasController = require('../controllers/salas');
const SalaModel = require('../models/salas');

test('getSalas retorna todas as salas', async () => {
  const salasMock = [
    {
        "_id": {
          "$oid": "6414aa3b0dbd5838b52ff7fc"
        },
        "nome": "Sala Premium",
        "tipo": "premium",
        "capacidade": 10,
        "valor": 1200,
        "img": "https://s32907.pcdn.co/wp-content/uploads/2020/02/mesa-sala-de-reuni%C3%A3o-22022020.jpg",
        "descricao": "Sala extremamente ampla",
        "numero": 1
      },
    { 
        "_id": {
          "$oid": "6414c6100dbd5838b52ff7fe"
        },
        "nome": " Sala Confort",
        "tipo": "confort",
        "capacidade": 10,
        "valor": 1300,
        "img": "https://www.flowork.com.br/wp-content/uploads/2017/08/conheca-as-salas-de-reuniao-perfeitas-pro-seu-negocio-flowork-escritorios-mobiliados-green-office-moinhos-de-vento-porto-alegre-rs-05-1.jpg",
        "descricao": "Sala confortavel",
        "numero": 2 },
  ];
  
  SalaModel.SalaModel = {
    find: jest.fn().mockResolvedValue(salasMock),
  };

  const req = {};
  const res = {
    json: jest.fn(),
    status: jest.fn().mockReturnThis(),
  };

  await salasController.getSalas(req, res);

  expect(res.status).toHaveBeenCalledWith(200);
  expect(res.json).toHaveBeenCalledWith(salasMock);
});
