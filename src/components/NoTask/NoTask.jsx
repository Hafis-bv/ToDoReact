import s from "./style.module.scss";
import React from "react";

const NoTask = () => {
  return (
    <div className={s.wrapper}>
      <h1>No tasks</h1>
    </div>
  );
};

export default NoTask;
