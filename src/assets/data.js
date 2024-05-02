const transactions = [
  {
    id: 1,
    date: "2019-12-01",
    description: "Paycheck from Bob's Burgers",
    category: "Income",
    amount: 1000,
  },
  {
    id: 2,
    date: "2019-12-01",
    description: "KFC",
    category: "Food",
    amount: 250,
  },
  {
    id: 3,
    date: "2019-12-02",
    description: "Burger King",
    category: "Food",
    amount: 800,
  },
  {
    id: 4,
    date: "2019-12-06",
    description: "SunGlasses",
    category: "Fashion",
    amount: 800,
  },
];

const getNextId = (
  (id) => () =>
    ++id
)(4);

export { transactions, getNextId };
