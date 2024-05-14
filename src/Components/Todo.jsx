import React from "react";
import Todocon from "./Todocon";


function Todo({todos, deltodo}) {
  return (
    <div className="container">
     {todos.map((todo, index) => {
        return (
            <Todocon todo={todo} index={index} deltodo={deltodo}/>
        )
     })}
    </div>
  );
}

export default Todo;
