import Cliente from "../core/Cliente";

interface BotaoIconeProps {
  handleClick: (cliente: Cliente) => void;
  cliente: Cliente;
  icone: JSX.Element;
  classname?: string;
}

export default function BotaoIcone(props: BotaoIconeProps) {
  return (
    <button
      onClick={() => props.handleClick(props.cliente)}
      className={`
        flex justify-center items-center
        rounded-full p-2 m-1
        hover:bg-purple-50
        ${props.classname} 
      `}
    >
      {props.icone}
    </button>
  );
}
