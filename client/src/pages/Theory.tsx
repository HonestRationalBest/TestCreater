import React from "react";
import style from "../static/style/Testing.module.sass";
import close from "../static/img/close.svg";

const Theory: React.FC = () => {
  return (
    <div className={style.test_wrapper}>
      <img src={close} className={style.done} alt="done" />
      <p>Some name</p>
    </div>
  );
};

export default Theory;
