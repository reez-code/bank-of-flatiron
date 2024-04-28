const transactions = [
  {
    id: 1,
    date: "2020-01-06",
    description: "Movies",
    category: "Entertainment",
    Amount: 2000,
  },
];

const getNextId = (
  (id) => () =>
    ++id
)(1);

export { transactions, getNextId };
