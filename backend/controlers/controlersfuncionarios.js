const Func = require('../models/modelfuncionarios')

exports.getFuncionario = async (req, res) => {
  try {
    const todos = await Func.modelsFunc.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getoneFuncionario = async (req, res) => {   
  try {;
    res.status(201).json(await Func.modelsFunc.findById(req.params.id));
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.createFuncionario = async (req, res) => {
  const func = new Func.modelsFunc({
    cpf   : req.body.cpf,
    nome  : req.body.nome,
    cep   : req.body.cep,
    tel   : req.body.tel,
    email : req.body.email,
    funcao: req.body.funcao
  });
  try {
    const newFunc = await func.save();
    res.status(201).json(newFunc);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateFuncionario = async (req, res) => {
  try {;
    res.status(201).json(await Func.modelsFunc.findByIdAndUpdate(req.params.id,req.body));
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteFuncionario = async (req, res) => {
  try {;
    res.status(201).json(await Func.modelsFunc.findByIdAndDelete(req.params.id));
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};