import React from "react";
import Data from "./List";
import { useState } from "react";
const RemoveItem = () => {
  const [Item, setItem] = useState(Data);
// The callBack function do filter and remove the item and return new array
  const RemoveData = (id) => {
    const NewItem = Item.filter((person) => person.id !== id);
    setItem(NewItem);
  }; 

  return (
    <React.Fragment>
      {Item.map((item) => {
        const { id, name } = item;
        return (
          <div className="lists" key={id}>
            <h3>{name}</h3>
            {/* In Button i am callback a function with a parameter of id which given at Data*/}
            <button onClick={() => RemoveData(id)}>Remove</button> 
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default RemoveItem;
