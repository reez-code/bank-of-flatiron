import React from "react";

const Add = () => {
  const divStyle = {
    width: "fit-content",
  };
  return (
    <>
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
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <div className="mt-2">
            <input
              type="text"
              name="region"
              id="region"
              autoComplete="address-level1"
              placeholder="Description"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <div className="mt-2">
            <input
              type="text"
              name="postal-code"
              id="postal-code"
              placeholder="Category"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <div className="mt-2">
            <input
              type="text"
              name="region"
              id="region"
              placeholder="Amount"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
    </>
  );
};

export default Add;
