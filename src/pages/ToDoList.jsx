import React, { useEffect, useState } from "react";
import List from "../components/List/List";
import ToDoInput from "../components/ToDoInput/ToDoInput";
import NoTask from "../components/NoTask/NoTask";
import { v4 as uuidv4 } from "uuid";
import { notifyError, notifySuccess } from "../utils/notifications";
import Container from "../components/Container/Container";

const ToDoList = () => {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });
  const [todoTitle, setTodoTitle] = useState("");
  const [todoAbout, setTodoAbout] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    if (todoTitle.length < 4) {
      notifyError("Your task is too short!");
      return;
    }

    setTodos([
      ...todos,
      {
        id: uuidv4(),
        title: todoTitle,
        about: todoAbout,
      },
    ]);
    setTodoTitle("");
    setTodoAbout("");
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    notifySuccess("Your task successfully deleted!");
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <Container>
      <ToDoInput
        title={todoTitle}
        setTitle={setTodoTitle}
        about={todoAbout}
        setAbout={setTodoAbout}
        handleAdd={handleAdd}
      />
      {todos.length === 0 ? (
        <NoTask />
      ) : (
        <>
          <List todos={todos} setTodos={setTodos} handleDelete={handleDelete} />
        </>
      )}
    </Container>
  );
};

export default ToDoList;
