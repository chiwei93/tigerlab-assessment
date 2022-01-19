import { useState, useEffect, useCallback } from 'react';

import { EditedTests } from '../types/TestsType';

const useGetTestsHistory = () => {
  const [tests, setTests] = useState<EditedTests[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getTestsHistory = useCallback(() => {
    setIsLoading(true);

    let testsData = [];

    const localStorageTests = localStorage.getItem('tests');

    if (localStorageTests) {
      testsData = JSON.parse(localStorageTests);
    }

    setTests(testsData);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    getTestsHistory();
  }, [getTestsHistory]);

  return { isLoading, tests, getTestsHistory };
};

export default useGetTestsHistory;
