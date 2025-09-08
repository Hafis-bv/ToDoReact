import React from "react";
import s from "./style.module.scss";
import { IoClose } from "react-icons/io5";

const List = ({ todos, handleDelete }) => {
  return (
    <div className={s.wrapper}>
      {todos.map((todo) => (
        <div className={s.todo} key={todo.id}>
          <div className={s.todoTitle}>
            <h1>{todo.title}</h1>
            <p>{todo.about}</p>
          </div>
          <button
            className={s.btn}
            onClick={() => {
              handleDelete(todo.id);
            }}
          >
            <IoClose size={20} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default List;
