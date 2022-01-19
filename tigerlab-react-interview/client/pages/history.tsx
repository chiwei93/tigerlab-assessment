import type { NextPage } from 'next';
import { FaRedo, FaTrash, FaChevronRight } from 'react-icons/fa';

import TableRow from '../components/Table/TableRow';
import LoadingSpinner from '../components/ui/LoadingSpinner';

import useGetTestsHistory from '../hooks/useGetTestsHistory';

const HistoryPage: NextPage = () => {
  const { isLoading, tests, getTestsHistory } = useGetTestsHistory();

  const onReloadBtnClick = () => {
    getTestsHistory();
  };

  const onClearBtnClick = () => {
    localStorage.removeItem('tests');
    getTestsHistory();
  };

  return (
    <>
      <div className='flex items-center text-base text-dark-gray mb-4'>
        <span className='mr-1'>Home</span>
        <span className='mr-1'><FaChevronRight /></span>
        <span>History</span>
      </div>

      <div className="flex items-center justify-between mb-12">
        <h1 className="font-bold text-2xl mobile-lg:text-3xl sm:text-5xl">
          History
        </h1>

        <div className="flex items-center">
          <button
            className="text-dark-gray flex items-center hover:scale-110 transition-transform duration-200"
            onClick={onReloadBtnClick}
          >
            <FaRedo className="mr-2" />
            <span className="text-base mobile-lg:text-lg">Reload</span>
          </button>
          <button
            className="text-red ml-4 flex items-center mobile-lg:ml-8"
            onClick={onClearBtnClick}
          >
            <FaTrash />
            <span className="ml-2 text-base mobile-lg:text-lg">Clear</span>
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-4 mb-20">
        {tests.length === 0 && (
          <p className="text-center text-lg sm:text-xl mt-32">
            No History found.
          </p>
        )}
        {isLoading && (
          <div className="mt-36">
            <LoadingSpinner />
          </div>
        )}
        {!isLoading &&
          tests.length > 0 &&
          tests.map(test => {
            return test.tests.map((t, index) => {
              return <TableRow key={index} test={t} category={test.category} />;
            });
          })}
      </div>
    </>
  );
};

export default HistoryPage;
