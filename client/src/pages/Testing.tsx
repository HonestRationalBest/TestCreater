import React from "react";
import NavBarAdmin from "../components/NavBarAdmin";
import TestingWrapper from "../components/TestingWrapper";
import TopNavBarAdmin from "../components/TopNavBarAdmin";

import style from "../static/style/Testing.module.sass";

const Testing: React.FC = () => {
  const array: Array<Object> = [{}, {}];

  const elTestinWrapper = array.map(() => <TestingWrapper />);

  return (
    <div className={style.wrapper}>
      <NavBarAdmin />
      <div className={style.content_wrapper}>
        <TopNavBarAdmin />
        <div className={style.test}>{elTestinWrapper}</div>
      </div>
    </div>
  );
};

export default Testing;
