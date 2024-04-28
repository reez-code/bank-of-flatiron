const transactions = [
  {
    id: 1,
    date: "2020-01-06",
    description: "Movies",
    category: "Entertainment",
    amount: 2000,
  },
];

const getNextId = (
  (id) => () =>
    ++id
)(3);

export { transactions, getNextId };
