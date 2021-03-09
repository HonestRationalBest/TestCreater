import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

import done from "../static/img/done.svg";
import add_button from "../static/img/add_button.svg";

import TopNavBarAdmin from "../components/TopNavBarAdmin";
import NavBarAdmin from "../components/NavBarAdmin";

import style from "../static/style/Test_creater.module.sass";
import { createTest } from "../redux/actions/CREATE_TEST";

const TestCreater: React.FC = () => {
  const dispatch = useDispatch();

  const [visibleToggle, setVisibleToggle] = useState(false);
  const [isRandom, setIsRandom] = useState(false);

  const [section, setSection] = useState<string>("");
  const [questionCount, setQuestionCount] = useState<number>(0);
  const [testName, setTestName] = useState<string>("");

  const arr: Array<string> = ["тест 1", "тест 2", "тест 1"];

  const sectionSet: Function = (index: number): void => {
    setSection(arr[index]);
    setVisibleToggle(!visibleToggle);
  };

  useEffect(() => {
    dispatch(createTest(section, questionCount, testName, isRandom));
  }, [section, questionCount, testName, isRandom, dispatch]);

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
                    value={section}
                  ></input>
                  {visibleToggle && (
                    <ul>
                      {arr.map((el, index) => {
                        return <li onClick={() => sectionSet(index)}>{el}</li>;
                      })}
                    </ul>
                  )}
                  <img
                    alt="add"
                    src={add_button}
                    className={style.add}
                    onClick={() => setVisibleToggle(!visibleToggle)}
                  />
                </div>
              </div>
              <div className={style.item}>
                <h3>Количество вопросов</h3>
                <input
                  placeholder="введите количество вопросов в тесте"
                  className={style.input}
                  onChange={(e) => setQuestionCount(Number(e.target.value))}
                ></input>
              </div>
              <div className={style.item}>
                <h3>Название теста</h3>
                <input
                  placeholder="введите название теста"
                  className={style.input}
                  onChange={(e) => setTestName(e.target.value)}
                ></input>
              </div>
            </div>
            <div className={style.random}>
              <div>
                <p>Случайный порядок</p>
              </div>
              <button
                className={style.button}
                onClick={() => setIsRandom(!isRandom)}
              >
                {isRandom ? <img src={done} alt="ok" /> : " "}
              </button>
            </div>
              <button className={style.next}>далее</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestCreater;
