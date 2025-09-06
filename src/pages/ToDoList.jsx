import React, { useState } from "react";
import List from "../components/List/List";
import ToDoInput from "../components/ToDoInput/ToDoInput";

const ToDoList = () => {
  const [todos, setTodos] = useState([]);
  const [todoTitle, setTodoTitle] = useState("");
  const [todoAbout, setTodoAbout] = useState("");
  const handleAdd = () => {
    if (todoTitle.length < 4) {
      alert("Your todo is too short");
      return;
    }
  };
  return (
    <div className="container">
      <ToDoInput
        title={todoTitle}
        setTitle={setTodoTitle}
        about={todoAbout}
        setAbout={setTodoAbout}
      />
      <List />
    </div>
  );
};

export default ToDoList;
