import React from "react";
import Cliente from "../core/Cliente";
import BotaoTexto from "./BotaoTexto";
import Entrada from "./Entrada";

interface FormularioProps {
  cliente?: Cliente;
  salvarCliente?: (cliente: Cliente) => void;
  cancelar?: () => void;
}

export default function Formulario(props: FormularioProps) {
  const id = props.cliente?.id;
  const [nome, setNome] = React.useState(props.cliente?.nome ?? "");
  const [idade, setIdade] = React.useState(props.cliente?.idade ?? 0);
  return (
    <div>
      {id ? (
        <Entrada texto="Código" valor={id} somenteLeitura classname="mb-5" />
      ) : (
        false
      )}
      <Entrada
        texto="Nome"
        valor={nome}
        handleChange={setNome}
        classname="mb-5"
      />
      <Entrada
        texto="Idade"
        tipo="number"
        valor={idade}
        handleChange={setIdade}
      />
      <div className="mt-7 flex justify-end">
        <BotaoTexto
          cor="blue"
          classname="mr-3"
          onClick={() => props.salvarCliente?.(new Cliente(nome, +idade, id))}
        >
          {id ? "Alterar" : "Salvar"}
        </BotaoTexto>
        <BotaoTexto onClick={props.cancelar}>Cancelar</BotaoTexto>
      </div>
    </div>
  );
}
