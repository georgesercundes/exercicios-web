import React from "react";
import ColecaoCliente from "../../backend/db/ColecaoCliente";
import Cliente from "../core/Cliente";
import ClienteRepositorio from "../core/ClienteRepositorio";
import useTabelaOuForm from "./useTabelaOuForm";

export default function useClientes() {
  const repo: ClienteRepositorio = new ColecaoCliente();

  const [cliente, setCliente] = React.useState<Cliente>(Cliente.vazio());
  const [clientes, setClientes] = React.useState<Cliente[]>([]);
  const { exibirTabela, exibirFormulario } = useTabelaOuForm();

  React.useEffect(() => {
    obterTodos();
  }, []);

  async function obterTodos() {
    const clientes = await repo.obterTodos();
    setClientes(clientes);
    exibirTabela;
  }

  function selecionarCliente(cliente: Cliente) {
    setCliente(cliente);
    exibirFormulario;
  }

  function excluirCliente(cliente: Cliente) {
    repo.excluir(cliente);
    obterTodos();
  }

  function novoCliente() {
    exibirFormulario;
    setCliente(Cliente.vazio());
  }

  function salvarCliente(cliente: Cliente) {
    repo.salvar(cliente);
    obterTodos();
  }

  return {
    cliente,
    clientes,
    novoCliente,
    salvarCliente,
    excluirCliente,
    selecionarCliente,
  };
}
