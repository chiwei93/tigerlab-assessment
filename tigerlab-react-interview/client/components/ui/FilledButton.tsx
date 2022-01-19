interface Props {
  clickHandler?: () => void;
}

const FilledButton: React.FC<Props> = ({
  children,
  clickHandler = () => {},
}) => {
  return (
    <button
      className="text-base bg-black text-white py-2 px-4 rounded md:text-lg hover:bg-purple transition-colors duration-200"
      onClick={clickHandler}
    >
      {children}
    </button>
  );
};

export default FilledButton;
