import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Row,
  Col,
  Form,
  FormControl,
  Button,
  Table,
  Image,
  Dropdown,
  DropdownButton,
  Carousel,
  Card,
} from "react-bootstrap";
import Cabecalho from "../Cabecalho/cabecalho";
import { useParams, useNavigate, Link } from "react-router-dom";
import ComboSalas from "../combosalas.js/combosalas";
import reservasService from "../../services/reservasService";
import clientesService from "../../services/clientesService";

import "./style.css";

function ReservaSalas() {
  const { id } = useParams();
  const [reserva, setFormData] = useState({});
  const [selectedValue, setSelectedValue] = useState("");
  const [cliente, setCliente] = useState({});
  const [clientecpf, setClientecpf] = useState({});
  const [clienteNome, setClienteNome] = useState({});

  const history = useNavigate();

  useEffect(() => {
    async function fetchFormData() {
      try {
        if (id !== "inserir") {
          const response = await reservasService.getoneReservas(id);
          setFormData(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchFormData();
  }, [id]);

  useEffect(() => {
    async function fetchClienteData() {
      try {
        if (clientecpf) {
          console.log(clientecpf);
          const clienteData = await clientesService.getClienteCPF(clientecpf);
          setCliente(clienteData.data[0]);
          setClienteNome(clienteData.data[0].nome);
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchClienteData();
  }, [clientecpf]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (event.nativeEvent.submitter.name === "salvar") {
        reserva.funcionario = "WEB - Internet";
        reserva.cliente = cliente;
        reserva.status = "R"; // indicar sala reservada
        reserva.valortotal = 1;

        console.log(reserva);
        if (id === "inserir") {
          await reservasService.postReservas(reserva);
          alert("incluido com sucesso!");
        } else {
          await reservasService.putReservas(id, reserva);
          alert("alterado com sucesso!");
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...reserva, [name]: value });
  };

  var clienteChange = (event) => {
    setClientecpf(event.target.value);
  };

  const handleSelectChange = (value) => {
    setSelectedValue(value);
    reserva.sala = value;
  };

  return (
    <Container fluid>
      <div className="reservasalas">
        <Form className="reservas__container" onSubmit={handleSubmit}>
          <div className="primeiraCol">
            <Form.Label>Valor select</Form.Label>
            <Form.Control
              name="sala"
              type="text"
              value={selectedValue}
              readOnly
            />
            <ComboSalas onSelectChange={handleSelectChange} />
            <Form.Label>
              CPF:
              <Form.Control
                type="number"
                name="cpf"
                value={clientecpf}
                onChange={clienteChange}
              />
            </Form.Label>

            <Form.Label>
              Nome:
              <Form.Control
                type="text"
                name="nome"
                value={clientecpf ? clienteNome : ""}
              />
            </Form.Label>
            <Link to="/clientes/:id">
              <Button variant="success">CADASTRE-SE</Button>
            </Link>

            <Form.Label>dia</Form.Label>
            <Form.Control
              value={reserva.data}
              name="data"
              type="date"
              onChange={handleChange}
            />

            <Form.Label>Hora Inicial</Form.Label>

            <Form.Control
              value={reserva.inicio}
              name="inicio"
              type="time"
              onChange={handleChange}
            />

            <Form.Label>Hora Final</Form.Label>

            <Form.Control
              value={reserva.fim}
              name="fim"
              type="time"
              onChange={handleChange}
            />
          </div>

          <div className="segundaCol">
            <Form.Label>Numero da reserva</Form.Label>
            <Form.Control
              type="number"
              value={reserva.numero}
              name="numero"
              onChange={handleChange}
            ></Form.Control>

            <Form.Label>Valor</Form.Label>
            <Form.Control
              type="number"
              value={reserva.valor}
              name="valor"
              onChange={handleChange}
            ></Form.Control>
            <Form.Label>Valor Total</Form.Label>
            <Form.Control
              type="number"
              value={reserva.valortotal}
              name="valortotal"
              onChange={handleChange}
            ></Form.Control>
            <Form.Label>Obs.</Form.Label>
            <Form.Control
              type="text"
              value={reserva.observacao}
              name="observacao"
              onChange={handleChange}
            ></Form.Control>
            <div className="buttons">
              <Form.Control type="submit" name="salvar" value={"salvar"} />
              <Form.Control type="submit" value={"Cancela"} />
            </div>
          </div>
        </Form>
      </div>
    </Container>
  );
}