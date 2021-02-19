import React from "react";
import { NavLink } from "react-router-dom";

import Header from "../components/Header";

import stars from "../static/img/stars.png";

import style from "../static/style/Home_and_Auth.module.sass";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <div className={style.container}>
        <div className={style.content}>
          <h2>Делай учебу интересной и познавательной </h2>
          <div className={style.button_wrapper}>
            <NavLink to="/student" className={style.link_student}>
              <button className={style.student}>я студент (-ка)</button>
            </NavLink>
            <NavLink to="/teacher" className={style.link_teacher}>
              <button className={style.teacher}>я преподаватель</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
