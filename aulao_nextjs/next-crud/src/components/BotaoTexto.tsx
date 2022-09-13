interface BotaoTextoProps {
  cor?: "green" | "blue" | "gray";
  children: any;
  classname?: string;
  onClick?: () => void;
}

export default function BotaoTexto(props: BotaoTextoProps) {
  const cor = props.cor ?? "gray";
  return (
    <button
      className={`
        bg-gradient-to-r from-${cor}-400 to-${cor}-700
        text-white px-4 py-2 rounded-md
        ${props.classname}
      `}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
