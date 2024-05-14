import React from "react";

function Todocon({todo , index , deltodo}) {
  return (
    <div className="todo">
      <p> {todo}</p>
      <div className="action">
        <input type="checkbox" />
        <button onClick={()=> deltodo(index)}>Delete</button>
      </div>
    </div>
  );
}

export default Todocon;
