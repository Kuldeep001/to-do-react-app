import { useState } from "react";
import "./App.css";
import Input from "./Components/Input";
import Todo from "./Components/Todo";
function App() {
  const [inputval, setinputval] = useState("");

  const [todos, settodos] = useState([]);

  function writetodo(e) {
    setinputval(e.target.value);
  }

  function addtodo() {
    if (inputval != "") {
      settodos((prevtodos) => [...prevtodos, inputval]);
      setinputval("");
    }
  }

  function deltodo(todoindex) {
    settodos((prevtodos) =>
      prevtodos.filter((prevtodos, prevtodosindex) => {
        return prevtodosindex != todoindex;
      })
    );
  }

  console.log(todos);
  return (
    <>
      <main>
        <h1> TO DO LIST</h1>
        <Input inputval={inputval} writetodo={writetodo} addtodo={addtodo} />
        <Todo todos={todos}  deltodo={deltodo}/>
      </main>
    </>
  );
}

export default App;
