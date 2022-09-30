import React, { useState } from "react";
import List from "./TODOlist";

const App = () => {
  const [inputList, setInput] = useState("");
  const [Item, setItem] = useState([]);

  const itemEvent = (event) => {
    setInput(event.target.value);
  };

  const ListofItems = () => {
    setItem((oldItems) => {
      return [...oldItems, inputList];
    });
    setInput("");
  };

  const deleteItem = (id) => {
    console.log("deleted");
    setItem((oldItems) => {
      return oldItems.filter((arrEle, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <div>
          <h1 style={{}}>ToDo List</h1>
          <hr />
          <input
            type="text"
            placeholder="Add an item"
            onChange={itemEvent}
            value={inputList}
          />
          <button onClick={ListofItems}>+</button>
        </div>
        <ol>
          {Item.map((itemVal, index) => {
            return (
              <List
                key={index}
                id={index}
                text={itemVal}
                onSelect={deleteItem}
              />
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default App;
