import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

import done from "../static/img/done.svg";
import add_button from "../static/img/add_button.svg";

import TopNavBarAdmin from "../components/TopPanel";
import NavBarAdmin from "../components/NavBarAdmin";

import style from "../static/style/Test_creater.module.sass";
import { createTest } from "../redux/actions/CREATE_TEST";
import TopPanel from "../components/TopPanel";
import { FormControlLabel, makeStyles, TextField, withStyles } from "@material-ui/core";
import { Checkbox } from '@material-ui/core';
import Question from "../components/Question";


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
    marginTop: 15
  },
  text_field: {
    width: 410,
    display: "block",
    marginLeft: 50,
    marginBottom: 25
  },
  checkbox_field:{

  }
}));

const GreenCheckbox = withStyles({
  root: {
    color: "black[400]",
    '&$checked': {
      color: "black[600]",
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);


const TestCreater: React.FC = () => {
  const dispatch = useDispatch();

  const classes = useStyles();

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
          <TopPanel modes={""}/>
          <div className={style.content}>
            <h2>Создайте тест прямо сейчас</h2>
            <div>
              <TextField id="standard-required"  placeholder="Введите название теста" className={classes.text_field}/>
              <TextField id="standard-required"  placeholder="Выберите раздел для этого теста" className={classes.text_field}/>
            </div>
            <div className={style.random_order}>
            <FormControlLabel
              control={<GreenCheckbox/>}
              label="Случайный порядок вопросов"/>
            </div>
            <div className={style.question_wrapper}>
                <Question/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestCreater;
