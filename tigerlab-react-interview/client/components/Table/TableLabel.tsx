interface Props {
  title: string;
  titleString: string;
  isSuccess?: boolean;
}

const TableLabel: React.FC<Props> = ({
  title,
  titleString,
  isSuccess,
}) => {
  const determineTitleCSS = () => {
    const textCSS = `text-lg sm:text-xl lg:text-lg`;

    let color = 'text-dark-black';

    if (isSuccess) {
      color = 'text-green';
    }

    if (isSuccess === false) {
      color = 'text-red';
    }

    return `${textCSS} ${color}`;
  };

  return (
    <div>
      <p className="text-sm text-dark-gray sm:text-base lg:text-sm mb-1">
        {title}
      </p>
      <p className={determineTitleCSS()}>{titleString}</p>
    </div>
  );
};

export default TableLabel;
