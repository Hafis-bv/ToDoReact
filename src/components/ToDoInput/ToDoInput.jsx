import s from "./style.module.scss";
import React from "react";
import { GoPlus } from "react-icons/go";

const ToDoInput = ({ title, setTitle, about, setAbout, handleAdd }) => {
  return (
    <form onSubmit={handleAdd} className={s.wrapper}>
      <div className={s.inputs}>
        <input
          type="text"
          placeholder="Title.."
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="About..."
          value={about}
          onChange={(e) => {
            setAbout(e.target.value);
          }}
        />
      </div>
      <button>
        <GoPlus size={50} color="#FF8303" />
      </button>
    </form>
  );
};

export default ToDoInput;
