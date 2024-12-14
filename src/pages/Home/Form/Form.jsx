import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';


function Form() {
  const [agendas, setAgendas] = useState([]); // Estado para armazenar os agendamentos
  const { handleSubmit, register, reset } = useForm();

  // Função para carregar dados do back-end
  async function loadData() {
    const resposta = await fetch("http://localhost:3000/agendas"); // Ajuste a rota do back-end
    const dados = await resposta.json();
    setAgendas(dados);
  }

  // Função para excluir uma agenda
  async function excluirAgenda(id) {
    await fetch(`http://localhost:3000/agendas/${id}`, {
      method: "DELETE"
    });
    loadData(); // Recarrega os dados após exclusão
  }

  // Função para editar uma agenda
  async function editarAgenda(id) {
    const novoNome = window.prompt("Digite o novo nome do cliente:");
    if (novoNome) {
      await fetch(`http://localhost:3000/agendas/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome: novoNome }) // Apenas edita o nome neste exemplo
      });
      loadData(); // Recarrega os dados após edição
    }
  }

  // Função para salvar uma nova agenda
  async function salvarAgenda(dados) {
    await fetch("http://localhost:3000/agendas", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dados)
    });
    loadData(); // Recarrega os dados após o envio
    reset(); // Reseta o formulário
  }

  // Carregar dados ao montar o componente
  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />

      {/* Conteúdo principal */}
      <main className="container py-4">
        <h1 className="text-center mb-4">Cadastro de Agendamento</h1>

        {/* Formulário */}
        <form onSubmit={handleSubmit(salvarAgenda)} className="mb-5 border p-4 rounded bg-light shadow">
          <div className="mb-3">
            <label htmlFor="nome" className="form-label">Nome do Cliente</label>
            <input 
              type="text" 
              id="nome" 
              className="form-control" 
              {...register("nome")} 
              required 
            />
          </div>
          <div className="mb-3">
            <label htmlFor="topico" className="form-label">Tópico</label>
            <input 
              type="text" 
              id="topico" 
              className="form-control" 
              {...register("topico")} 
              required 
            />
          </div>
          <div className="mb-3">
            <label htmlFor="horario" className="form-label">Horário</label>
            <input 
              type="time" 
              id="horario" 
              className="form-control" 
              {...register("horario")} 
              required 
            />
          </div>
          <div className="mb-3">
            <label htmlFor="descricao" className="form-label">Descrição</label>
            <textarea 
              id="descricao" 
              className="form-control" 
              rows="4" 
              {...register("descricao")} 
              required 
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-100">Agendar</button>
        </form>

        {/* Listagem de Agendamentos */}
        <h2 className="text-center mb-3">Agendamentos</h2>
        <table className="table table-striped table-bordered">
          <thead className="table-primary">
            <tr>
              <th>#</th>
              <th>Nome</th>
              <th>Tópico</th>
              <th>Horário</th>
              <th>Descrição</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {agendas.map((agenda, index) => (
              <tr key={agenda.id}>
                <td>{index + 1}</td>
                <td>{agenda.nome}</td>
                <td>{agenda.topico}</td>
                <td>{agenda.horario}</td>
                <td>{agenda.descricao}</td>
                <td>
                  <div className="d-flex justify-content-around">
                    <button 
                      className="btn btn-warning btn-sm me-2"
                      onClick={() => editarAgenda(agenda.id)}
                    >
                      Editar
                    </button>
                    <button 
                      className="btn btn-danger btn-sm"
                      onClick={() => excluirAgenda(agenda.id)}
                    >
                      Excluir
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>

      <Footer />
    </div>
  );
}

export default Form;
