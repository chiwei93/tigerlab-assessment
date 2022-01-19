export type Tests = {
  category: string;
  description: string;
  tests: Test[];
};

export type EditedTests = {
  category: string;
  description: string;
  tests: EditedTest[];
};

type Test = {
  name: string;
  route: string;
};

export type EditedTest = {
  name: string;
  route: string;
  result: string;
  createdAt: string;
};
