const cliente = require('../models/modelclientes')

exports.getCliente = async (req, res) => {
  try {
    const clientes = await cliente.modelsClient.find();
    //console.log(typeof cliente);
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ message: error.message });

  }
};

exports.getoneCliente = async (req, res) => {   
  try {;
    res.status(201).json(await cliente.modelsClient.findById(req.params.id));
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.createCliente = async (req, res) => {
  const clientes = new cliente.modelsClient({
    cpf: req.body.cpf,
    nome : req.body.nome,   
    cep: req.body.cep,
    tel: req.body.tel,
    email: req.body.email
  });
  try {
    const newCliente = await clientes.save();
    res.send(201).json(newCliente);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateCliente = async (req, res) => {
  try {;
    res.status(201).json(await cliente.modelsClient.findByIdAndUpdate(req.params.id,req.body));
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteCliente = async (req, res) => {
  try {;
    res.status(201).json(await cliente.modelsClient.findByIdAndDelete(req.params.id));
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
exports.getcpfCliente = async (req, res) => {   
  try {;
    res.status(201).json(await cliente.modelsClient.find({cpf:req.params.id}));
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
exports.getClienteByCPF = async (cpf) => {
  try {
    const cliente = await modelsClient.findOne({ cpf: cpf});
    return cliente;
  } catch (error) {
    throw new Error(error.message);
  }
};
