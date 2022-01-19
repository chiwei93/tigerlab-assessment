import { useState, useEffect, useCallback } from 'react';
import fetch from 'isomorphic-unfetch';

import { Tests, EditedTests } from '../types/TestsType';

const useRunAllTests = () => {
  // state for loading, error and tests
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);
  const [tests, setTests] = useState<EditedTests[]>([]);

  const url = 'http://localhost:8001/api/v1/tests';

  // for fetching all tests
  async function fetchAllTests() {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Internal Server Error. Error in fetching tests.');
      }

      const data: { tests: Tests[] } = await response.json();

      return data.tests;
    } catch (err) {
      throw err;
    }
  }

  // for fetching tests result
  async function runSingleTest(url: string) {
    try {
      const response = await fetch(url, { method: 'POST' });

      if (!response.ok) {
        throw new Error('Internal Server Error. Error in fetching test result');
      }

      const data: { result: string } = await response.json();

      const currentTime = new Date().toLocaleString();

      return { ...data, createdAt: currentTime };
    } catch (err) {
      throw err;
    }
  }

  // for remembering the run all tests function
  const runAllTests = useCallback(async () => {
    try {
      setIsLoading(true);

      const tests = await fetchAllTests();

      const editedTests = [];

      for (let i = 0; i < tests.length; i++) {
        const testsArr = [];

        for (let j = 0; j < tests[i].tests.length; j++) {
          const currentTest = { ...tests[i].tests[j] };

          const resultUrl = `http://localhost:8001/api/v1/tests${currentTest.route}`;

          const resultData = await runSingleTest(resultUrl);

          testsArr.push({ ...currentTest, ...resultData });
        }

        const editedTestsData = { ...tests[i], tests: testsArr };

        editedTests.push(editedTestsData);
      }

      // get tests from local storage
      const localStorageTestsData = localStorage.getItem('tests');

      let localStorageTests = [];

      if (localStorageTestsData) {
        localStorageTests = JSON.parse(localStorageTestsData);
      }

      // store tests data on local storage for history
      localStorage.setItem(
        'tests',
        JSON.stringify([...editedTests, ...localStorageTests])
      );

      setTests(editedTests);
    } catch (err) {
      const errorMsg =
        (err as any).message ||
        'Internal Server Error. Please refresh the page.';

      setError(errorMsg);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    runAllTests();
  }, [runAllTests]);

  return { isLoading, error, tests, runAllTests };
};

export default useRunAllTests;
