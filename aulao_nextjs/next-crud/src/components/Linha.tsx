import Cliente from "../core/Cliente";
import BotaoIcone from "./BotaoIcone";
import { IconeEdicao, IconeLixeira } from "./icones";

interface DadosTabelaProps {
  cliente: Cliente;
  indice: number;
  key: string;
  exibirBotoes: boolean;
  clienteSelecionado: (cliente: Cliente) => void;
  clienteExcluido: (cliente: Cliente) => void;
}

export default function Linha(props: DadosTabelaProps) {
  return (
    <tr
      key={props.key}
      className={`${
        props.indice % 2 === 0 ? "bg-purple-200" : "bg-purple-100"
      }`}
    >
      <td className="text-left p-4">{props.cliente.id}</td>
      <td className="text-left p-4">{props.cliente.nome}</td>
      <td className="text-left p-4">{props.cliente.idade}</td>
      {props.exibirBotoes ? (
        <td className="flex justify-center">
          {props.clienteSelecionado ? (
            <BotaoIcone
              handleClick={props.clienteSelecionado}
              cliente={props.cliente}
              icone={IconeEdicao}
              classname="text-green-600"
            />
          ) : (
            false
          )}
          {props.clienteExcluido ? (
            <BotaoIcone
              handleClick={props.clienteExcluido}
              cliente={props.cliente}
              icone={IconeLixeira}
              classname="text-red-500"
            />
          ) : (
            false
          )}
        </td>
      ) : (
        false
      )}
    </tr>
  );
}
