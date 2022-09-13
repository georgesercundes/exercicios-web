interface CabecalhoProps {
  exibirAcoes: boolean;
}

export default function Cabecalho(props: CabecalhoProps) {
  return (
    <tr>
      <th className="text-left p-4">Código</th>
      <th className="text-left p-4">Nome</th>
      <th className="text-left p-4">Idade</th>
      {props.exibirAcoes ? <th className="p-4">Ações</th> : false}
    </tr>
  );
}
