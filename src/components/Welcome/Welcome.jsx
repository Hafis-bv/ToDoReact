import { Link } from "react-router-dom";
import s from "./style.module.scss";
import React from "react";

const Welcome = () => {
  return (
    <div className={s.wrapper}>
      <h1>WELCOME TO TODO APP</h1>
      <Link to={"/list"} className={s.link}>
        Get started
      </Link>
    </div>
  );
};

export default Welcome;
