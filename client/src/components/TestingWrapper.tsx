import React from "react";
import style from "../static/style/Testing.module.sass";
import Test from "./Test";

const TestingWrapper: React.FC = () => {
  return (
    <div className={style.testing_wrapper_wrapper}>
      <h2>Раздел №1</h2>
      <div className={style.flex_wrapper}>
        <Test />
        <Test />
        <Test />
        <Test />
      </div>
    </div>
  );
};

export default TestingWrapper;
