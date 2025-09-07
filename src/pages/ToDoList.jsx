import React, { useState } from "react";
import List from "../components/List/List";
import ToDoInput from "../components/ToDoInput/ToDoInput";
import NoTask from "../components/NoTask/NoTask";

const ToDoList = () => {
  const [todos, setTodos] = useState([]);
  const [todoTitle, setTodoTitle] = useState("");
  const [todoAbout, setTodoAbout] = useState("");
  const newTodods = {
    id: todos.length,
    title: todoTitle,
    about: todoAbout,
  };
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id)); //мне помог старый проект
  };
  const handleAdd = (e) => {
    e.preventDefault();
    if (todoTitle.length < 1 || todoAbout.length < 4) {
      alert("Your todo is too short");
      return;
    }
    setTodos([...todos, newTodods]);
    setTodoTitle("");
    setTodoAbout("");
  };
  return (
    <div className="container">
      <ToDoInput
        title={todoTitle}
        setTitle={setTodoTitle}
        about={todoAbout}
        setAbout={setTodoAbout}
        handleAdd={handleAdd}
      />
      {todos.length === 0 ? (
        <NoTask /> // я не додумался как поэтому новый компонент создал
      ) : (
        <>
          <List todos={todos} setTodos={setTodos} handleDelete={handleDelete} />
        </>
      )}
    </div>
  );
};

export default ToDoList;
