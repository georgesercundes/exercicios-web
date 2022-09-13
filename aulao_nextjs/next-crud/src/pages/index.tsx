import React, { useEffect } from "react";
import BotaoTexto from "../components/BotaoTexto";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import useClientes from "../hooks/useClientes";
import useTabelaOuForm from "../hooks/useTabelaOuForm";

export default function Home() {
  const {
    cliente,
    clientes,
    novoCliente,
    selecionarCliente,
    salvarCliente,
    excluirCliente,
  } = useClientes();

  const { tabelaVisivel, exibirTabela } = useTabelaOuForm();

  return (
    <div
      className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}
    >
      <Layout titulo="Cadastro Simples">
        {tabelaVisivel ? (
          <>
            <div className="flex justify-end">
              <BotaoTexto cor="green" classname="mb-4" onClick={novoCliente}>
                Novo Cliente
              </BotaoTexto>
            </div>
            <Tabela
              clientes={clientes}
              clienteSelecionado={selecionarCliente}
              clienteExcluido={excluirCliente}
            />
          </>
        ) : (
          <Formulario
            cliente={cliente}
            cancelar={() => exibirTabela}
            salvarCliente={salvarCliente}
          />
        )}
      </Layout>
    </div>
  );
}
