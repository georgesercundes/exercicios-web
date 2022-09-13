import Cliente from "../core/Cliente";
import Cabecalho from "./Cabecalho";
import Linha from "./Linha";

interface TabelaProps {
  clientes: Cliente[];
  clienteSelecionado?: (cliente: Cliente) => void;
  clienteExcluido?: (cliente: Cliente) => void;
}

export default function Tabela(props: TabelaProps) {
  const exibir = !!props.clienteSelecionado || !!props.clienteExcluido;

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead
        className={`
        text-gray-100
        bg-gradient-to-r from-purple-500 to-purple-800
      `}
      >
        <Cabecalho exibirAcoes={exibir} />
      </thead>
      <tbody>
        {props.clientes?.map((cliente, i) => (
          <Linha
            cliente={cliente}
            indice={i}
            key={cliente.id}
            exibirBotoes={exibir}
            clienteSelecionado={props.clienteSelecionado}
            clienteExcluido={props.clienteExcluido}
          />
        ))}
      </tbody>
    </table>
  );
}
