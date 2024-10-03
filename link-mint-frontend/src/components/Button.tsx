interface ButtonProps{
    onClick: ()=> void;
    children: React.ReactNode;

}

const Button:React.FC<ButtonProps> = ({onClick,children}) => {
  return (
      <button className="ml-3 border-green-400 text-green-400 font-bold py-2 px-4 rounded-3xl hover:bg-gray-600 hover:text-white transition"
      onClick={onClick}> {children}</button>
  );
};

export default Button
