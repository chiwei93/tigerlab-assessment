export const randomiseArr = (arr) => {
  const arrCopy = [...arr];

  const indexArr = [];

  arr.forEach((_, index) => {
    let randomIndex = Math.floor(Math.random() * 4);

    while (validateIndex(indexArr, randomIndex)) {
      randomIndex = Math.floor(Math.random() * 4);
    }

    arr[index] = arrCopy[randomIndex];
    indexArr.push(randomIndex);
  });

  return arr;
};

const validateIndex = (indexArr, index) => {
  return indexArr.some((indexValue) => indexValue === index);
};
