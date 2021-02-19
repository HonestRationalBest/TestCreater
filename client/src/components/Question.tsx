import React from "react";

import style from "../static/style/Components.module.sass";

const Question: React.FC = () => {
  //TODO

  return (
    <div className={style.question_wrapper_flex_wrapper}>
      <p>Ответы</p>
      <div className={style.choose}>
        <div className={style.table_wrapper}>
          <label htmlFor="qu1" className={`${style.circle} ${style.active}`}>
            <textarea
              className={style.textarea}
              placeholder="вариант 1"
              wrap="soft"
            />
          </label>
        </div>
        <div className={style.table_wrapper}>
          <label htmlFor="qu2" className={`${style.circle}`}>
            <textarea
              className={style.textarea}
              placeholder="вариант 2"
              wrap="soft"
            />
          </label>
        </div>
        <div className={style.table_wrapper}>
          <label htmlFor="qu3" className={`${style.circle} `}>
            <textarea
              className={style.textarea}
              placeholder="вариант 3"
              wrap="soft"
            />
          </label>
        </div>
        <div className={style.table_wrapper}>
          <label htmlFor="qu4" className={`${style.circle} `}>
            <textarea
              className={style.textarea}
              placeholder="вариант 4"
              wrap="soft"
            />
          </label>
        </div>
        <input type="radio" name="test" id="qu1" className={style.input} />
        <input type="radio" name="test" id="qu2" className={style.input} />
        <input type="radio" name="test" id="qu3" className={style.input} />
        <input type="radio" name="test" id="qu4" className={style.input} />
      </div>
    </div>
  );
};

export default Question;
