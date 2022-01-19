import type { NextPage } from 'next';

import OverviewCard from '../components/Overview/OverviewCard';
import TableRow from '../components/Table/TableRow';
import FilledButton from '../components/ui/FilledButton';
import LoadingSpinner from '../components/ui/LoadingSpinner';

import useRunAllTests from '../hooks/useRunAllTests';

const Home: NextPage = () => {
  // fetch and run all tests
  const { isLoading, error, tests, runAllTests } = useRunAllTests();

  // for showing overview's informations
  const showOverviewInfo = () => {
    let total = 0;
    let succeed = 0;
    let failed = 0;

    tests.forEach(test => {
      test.tests.forEach(t => {
        total++;

        if (t.result === 'false') {
          failed++;
        }

        if (t.result === 'true') {
          succeed++;
        }
      });
    });

    const overviewTitle = [
      { title: 'Tests ran', value: total },
      { title: 'Tests succeeded', value: succeed },
      { title: 'Tests failed', value: failed },
    ];

    return overviewTitle.map((overview, index) => {
      return (
        <li className="grow" key={index}>
          <OverviewCard
            title={overview.title}
            valueNumber={overview.value}
            index={index}
          />
        </li>
      );
    });
  };

  // for handling run all test btn
  const onRunAllTestsBtnClick = () => {
    runAllTests();
  };

  // when page is loading
  if (isLoading) {
    return (
      <div className="mt-36">
        <LoadingSpinner />
      </div>
    );
  }

  // if page has error
  if (error) {
    return (
      <div className="text-center mt-32 mb-20">
        <h1 className="text-5xl mobile-lg:text-large font-bold mb-4">500</h1>
        <p className="text-dark-gray text-lg mb-8 mobile-lg:text-xl">
          {error}. Please refresh page.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="flex items-center text-base text-dark-gray mb-4">
        <span>Home</span>
      </div>

      <h1 className="font-bold text-3xl mb-4 sm:text-5xl">Overview</h1>

      <section className="mb-12" id="overview">
        <ul className="flex flex-col gap-2 sm:flex-row sm:justify-between">
          {showOverviewInfo()}
        </ul>
      </section>

      <section id="summary" className="relative mb-20">
        <div className="flex items-center justify-between mb-6">
          <p className="text-xl font-bold sm:text-2xl">Summary</p>
          <FilledButton clickHandler={onRunAllTestsBtnClick}>
            Run all tests again
          </FilledButton>
        </div>

        <div className="flex flex-col gap-4">
          {tests.map(test => {
            return test.tests.map((t, index) => {
              return <TableRow key={index} test={t} category={test.category} />;
            });
          })}
          {tests.length === 0 && (
            <p className="text-center text-lg sm:text-xl mt-32">
              No tests found
            </p>
          )}
        </div>
      </section>
    </>
  );
};

export default Home;
