import { InputBase, makeStyles, withStyles } from "@material-ui/core";
import React from "react";

import style from "../static/style/Components.module.sass";


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
    marginTop: 15
  },
}));




const Question: React.FC = () => {


  //TODO
  const classes = useStyles();
  return (
    <div className={style.question_wrapper}>
      <h3>Вопрос 1</h3>
      <div className={style.question_mode}>
        <p>Одиночный</p>
        <p>Множественный</p>
      </div>
      <div className={style.variants_wrapper}>
        <div className={style.var_wrapper}>
          <div className={style.circle}></div>
           <InputBase
          className={classes.margin}
          defaultValue="Naked input"
          inputProps={{ 'aria-label': 'naked' }}/>
          </div>
          <div className={style.var_wrapper}>
          <div className={style.circle}></div>
           <InputBase
          className={classes.margin}
          defaultValue="Naked input"
          inputProps={{ 'aria-label': 'naked' }}/>
          </div>
          <div className={style.var_wrapper}>
          <div className={style.circle}></div>
           <InputBase
          className={classes.margin}
          defaultValue="Naked input"
          inputProps={{ 'aria-label': 'naked' }}/>
          </div>
          <div className={style.var_wrapper}>
          <div className={style.circle}></div>
           <InputBase
          className={classes.margin}
          defaultValue="Naked input"
          inputProps={{ 'aria-label': 'naked' }}/>
          </div>
      </div>
    </div>
  );
};

export default Question;
