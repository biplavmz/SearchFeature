import React, { useEffect, useState } from "react";
// search Implementation
const TodoList = () => {
  const [searchInput, setSearchInput] = useState("");
  const list = [
    { name: "raju", index: 1 },
    { name: "qbcc", index: 2 },
    { name: "acdf", index: 3 }
  ];

  const [ListDisplay, setListDisplay] = useState([]);
  const [noDataFound, setnoDataFound] = useState();

  function changeData(e) {
    setSearchInput(e.target.value);
  }

  useEffect(() => {
    let newList = list.filter((item) => item.name.includes(searchInput));
    if (searchInput !== "") {
      setListDisplay(newList);
    } else if (searchInput == "") {
      setListDisplay([]);
    }
  }, [searchInput]);

  useEffect(() => {
    console.log(ListDisplay);
    if (searchInput !== "" && ListDisplay.length == 0) {
      setnoDataFound("no Data Found");
    } else {
      setnoDataFound("");
    }
  }, [ListDisplay, searchInput]);

  return (
    <>
      <h1>Search</h1>
      <input
        type="text"
        placeholder="search"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />

      <div>
        {ListDisplay.map((item, index) => (
          <>
            <li key={index}>{item.name}</li>
          </>
        ))}
      </div>

      {noDataFound}
    </>
  );
};

export default TodoList;
