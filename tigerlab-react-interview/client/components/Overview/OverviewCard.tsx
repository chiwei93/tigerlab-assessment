interface Props {
  title: string;
  valueNumber: number;
  index: number;
}

const OverviewCard: React.FC<Props> = ({ title, valueNumber, index }) => {
  const determineTitleCSS = () => {
    const titleCSS = 'mb-1';

    let color = 'text-dark-gray';

    if (index === 1) {
      color = 'text-green'
    }

    if (index === 2) {
      color = 'text-red'
    }

		return `${color} ${titleCSS}`
  };

  return (
    <div className="text-base bg-white rounded-lg p-4 sm:text-lg sm:p-6">
      <p className={determineTitleCSS()}>{title}</p>
      <p className="text-2xl sm:text-3xl">{valueNumber}</p>
    </div>
  );
};

export default OverviewCard;
