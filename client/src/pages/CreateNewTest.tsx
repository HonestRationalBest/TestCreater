import React from "react";

import NavBarAdmin from "../components/NavBarAdmin";
import Question from "../components/Question";
import TopNavBarAdmin from "../components/TopNavBarAdmin";

import style from "../static/style/Test_creater.module.sass";

const CreateNewTest: React.FC = () => {
  return (
    <div>
      <div className={style.create_new_test_wrapper}>
        <NavBarAdmin />
        <div className={style.create_new_test_content_wrapper}>
          <TopNavBarAdmin />
          <div className={style.content}>
            <h2>Тема</h2>
            <div>
              <Question />
            </div>
            <div className={style.button_wrapper}>
              <button className={style.send}>отправить</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNewTest;
