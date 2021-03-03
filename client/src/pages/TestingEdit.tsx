import React from "react";
import ModesTesting from "../components/ModesTesting";
import NavBarAdmin from "../components/NavBarAdmin";
import TestingWrapper from "../components/TestingWrapper";
import TopNavBarAdmin from "../components/TopNavBarAdmin";

import style from "../static/style/Testing.module.sass";

const TestingEdit: React.FC = () => {
  const array: Array<Object> = [{}, {}];

  const elemTestinWrapper = array.map(() => <TestingWrapper />);

  return (
    <div className={style.wrapper}>
      <NavBarAdmin />
      <div className={style.content_wrapper}>
        <ModesTesting />
        <div className={style.test}>{elemTestinWrapper}</div>
              
      <div className={style.new_section_wrapper}>
                <button className={style.new_section} >
                    добавить
                </button>
                </div>
      </div>

    </div>
  );
};

export default TestingEdit;
