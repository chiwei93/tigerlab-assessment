import { useState, useEffect, useRef } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { CSSTransition } from 'react-transition-group';

import TableLabel from './TableLabel';

import { EditedTest } from '../../types/TestsType';

interface Props {
  category: string;
  test: EditedTest;
}

const TableRow: React.FC<Props> = ({
  test,
  category,
}) => {
  // state for expanding row
  const [isExpanded, setIsExpanded] = useState(false);

  const nodeRef = useRef<null | HTMLDivElement>(null);

  // listen for resize event when component is mounted
  useEffect(() => {
    const onWindowResize = () => {
      if (window.innerWidth >= 1024) {
        setIsExpanded(false);
      }
    };

    window.addEventListener('resize', onWindowResize);

    // remove event listener when component is unmounted
    return () => window.removeEventListener('resize', onWindowResize);
  }, []);

  // show determining status
  const determineStatus = () => {
    if (test.result === 'false') {
      return 'Failed';
    } else {
      return 'Success';
    }
  };

  const determineStatusTitleColor = () => {
    if (test.result === 'false') {
      return false;
    } else {
      return true;
    }
  };

  // active class for underline
  const isRowExpandedOrHovered = () => {
    const underlineCSS =
      'bg-black absolute top-0 left-0 w-1 h-full rounded-tl rounded-bl opacity-0 group-hover:opacity-100 transition-opacity duration-300';

    return isExpanded ? `opacity-100 ${underlineCSS}` : `${underlineCSS}`;
  };

  // for active class for expand btn
  const isExpandedBtnActive = () => {
    const btnCSS = 'transition-transform duration-300';

    return isExpanded ? `rotate-180 ${btnCSS}` : `${btnCSS}`;
  };

  // handle expand button clicks
  const onBtnClick = () => {
    setIsExpanded(state => {
      return !state;
    });
  };

  return (
    <div className="relative group">
      <div className="flex justify-between items-center bg-white p-4 rounded lg:grid lg:grid-cols-4 lg:gap-8">
        <TableLabel title="Name" titleString={test.name} />

        <div className="hidden lg:block">
          <TableLabel title="Category" titleString={category} />
        </div>

        <div className="hidden lg:block">
          <TableLabel
            title="Status"
            titleString={determineStatus()}
            isSuccess={determineStatusTitleColor()}
          />
        </div>

        <div className="hidden lg:block">
          <TableLabel title="Date run" titleString={test.createdAt} />
        </div>
        
        <button onClick={onBtnClick} className="lg:hidden">
          <FaChevronDown className={isExpandedBtnActive()} />
        </button>
      </div>

      <CSSTransition
        in={isExpanded}
        timeout={300}
        nodeRef={nodeRef}
        classNames="expand"
        mountOnEnter
        unmountOnExit
      >
        <div
          className="px-4 py-4 bg-light-gray grid grid-cols-2 gap-4 rounded-br overflow-hidden transition-all duration-300"
          ref={nodeRef}
        >
          <TableLabel title="Category" titleString={category} />

          <TableLabel
            title="Status"
            titleString={determineStatus()}
            isSuccess={determineStatusTitleColor()}
          />

          <TableLabel title="Date run" titleString={test.createdAt} />
        </div>
      </CSSTransition>

      <span className={isRowExpandedOrHovered()}></span>
    </div>
  );
};

export default TableRow;
