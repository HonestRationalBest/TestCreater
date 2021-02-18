import React from "react";
import { NavLink } from "react-router-dom";
import add_button from "../static/img/add_button.svg";

import TopNavBarAdmin from "../components/TopNavBarAdmin";
import NavBarAdmin from "../components/NavBarAdmin";

import style from "../static/style/Test_creater.module.sass";

const TestCreater: React.FC = () => {
  return (
    <div>
      <div className={style.flex_wrapper}>
        <NavBarAdmin />
        <div className={style.content_wrapper}>
          <TopNavBarAdmin />
          <div className={style.content}>
            <div className={style.label}>
              <div className={style.item}>
                <h3>Выберите раздел</h3>
                <div className={style.relative}>
                  <input
                    placeholder="введите название раздела"
                    className={style.input}
                  ></input>
                  <ul>
                    <li>тест к лекции 1</li>
                    <li>тест к лекции 2</li>
                    <li>тест к лекции 3</li>
                    <li>тест к лекции 3</li>
                  </ul>

                  <img alt="add" src={add_button} className={style.add} />
                </div>
              </div>
              <div className={style.item}>
                <h3>Количество вопросов</h3>
                <input
                  placeholder="введите количество вопросов в тесте"
                  className={style.input}
                ></input>
              </div>
              <div className={style.item}>
                <h3>Название теста</h3>
                <input
                  placeholder="введите название теста"
                  className={style.input}
                ></input>
              </div>
            </div>
            <div className={style.random}>
              <div>
                <p>Случайный порядок</p>
              </div>
              <button className={style.button}></button>
            </div>
            <NavLink to="/question_wrapper">
              <button className={style.next}>далее</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestCreater;
