const Form = ({
  date,
  setDate,
  amount,
  setAmount,
  description,
  setDescription,
  category,
  setCategory,
  handleSubmit,
}) => {
  const divStyle = {
    width: "fit-content",
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div
          className="mt-10 grid gap-x-6 gap-y-8 sm:grid-cols-8"
          id="input"
          style={divStyle}
        >
          <div className="sm:col-span-2 sm:col-start-1">
            <div className="mt-2">
              <input
                type="date"
                id="date"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <div className="mt-2">
              <input
                type="text"
                id="description"
                placeholder="Description"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <div className="mt-2">
              <input
                type="text"
                id="category"
                placeholder="Category"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <div className="mt-2">
              <input
                type="number"
                id="amount"
                placeholder="Amount"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
          </div>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add Transaction
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
