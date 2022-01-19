import HashLoader from 'react-spinners/HashLoader';
import { css } from '@emotion/react';

interface Props {
  size?: number;
}

const LoadingSpinner: React.FC<Props> = ({ size = 100 }) => {
  const loaderCSS = css`
    display: block;
  `;

  return (
    <div className="flex items-center justify-center">
      <HashLoader css={loaderCSS} size={size} />
    </div>
  );
};

export default LoadingSpinner;
