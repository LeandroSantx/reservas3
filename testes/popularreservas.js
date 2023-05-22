const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/reservas', { useNewUrlParser: true});

var Schema = mongoose.Schema;

// Função para gerar um número aleatório entre um valor mínimo e máximo
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

async function popularReservas() {
  try {    
    const reservas = [];
    // Gerar 1000 registros aleatórios
    for (let i = 0; i < 1000; i++) {
      const reserva = {
        sala: `Sala ${getRandomNumber(1, 10)}`,
        cliente: `Cliente ${getRandomNumber(1, 100)}`,
        funcionario: `Funcionário ${getRandomNumber(1, 50)}`,
        data: new Date(),
        inicio: getRandomNumber(8, 18),
        fim: getRandomNumber(19, 22),
        valortotal: getRandomNumber(50, 500),
        observacao: `Observação ${i + 1}`,
        status: i % 2 === 0 ? 'Confirmada' : 'Pendente',
      };
      reservas.push(reserva);
    }
    await Reserva.insertMany(reservas);
    console.log('Reservas populadas com sucesso!');
  } catch (error) {
    console.error('Erro ao popular as reservas:', error);
  } finally {
    mongoose.connection.close();
  }
}

popularReservas();
