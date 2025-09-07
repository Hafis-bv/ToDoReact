import React, { useState } from "react";
import s from "./style.module.scss";
import { IoClose } from "react-icons/io5";

const List = ({ todos, setTodos, handleDelete }) => {
  return (
    <div className={s.wrapper}>
      {todos.map((todo) => (
        <div className={s.todo} key={todo.id}>
          <div className={s.todoTitle}>
            <h1>{todo.title}</h1>
            <p>{todo.about}</p>
          </div>
          <button
            onClick={() => {
              handleDelete(todo.id);
            }}
          >
            <img src="close.svg" alt="Close" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default List;

// <IoClose size={15} color="#FF8303" />
//так как иконка кривой была
//плюсик и там где начинаеться задание неровно я не ебу почему
// <IoClose size={15} color="#FF8303" />

/* <img src="close.svg" alt="wsw" /> */
