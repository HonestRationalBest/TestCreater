import { Checkbox, FormControl, FormControlLabel, FormLabel, InputBase, makeStyles, RadioGroup, withStyles } from "@material-ui/core";
import { Favorite, FavoriteBorder } from "@material-ui/icons";
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import React, { useState } from "react";

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
  var: {
    marginRight: 0,
    "& .MuiCheckbox-colorSecondary.Mui-checked":{
      color: "#396AEB",
      "& .MuiIconButton-label ":{
        background: "#396AEB",
        borderRadius: "50%"
      }
    },
  }
}));




const Question: React.FC = () => {

  const [value, setValue] = useState<any>([false,false,false,false])

  const classes = useStyles();

  const channging = ():void =>{
    
  }

  return (
    <div className={style.question_wrapper}>
      <h3>Вопрос 1</h3>
      <div className={style.question_mode}>
        <p>Одиночный</p>
        <p>Множественный</p>
      </div>

      <div className={style.variants_wrapper}>
      <RadioGroup>

        <div className={style.var_wrapper}>
            
        <FormControlLabel
        control={<Checkbox icon={<RadioButtonUncheckedIcon />} checkedIcon={<RadioButtonUncheckedIcon />}/>}
        label=""
        className={classes.var}
        />
           <InputBase
          className={classes.margin}
          defaultValue="Naked input"
          inputProps={{ 'aria-label': 'naked' }}/>
          </div>
          <div className={style.var_wrapper}>
          <FormControlLabel
        control={<Checkbox icon={<RadioButtonUncheckedIcon />} checkedIcon={<RadioButtonUncheckedIcon />} checked={value[1]}/>}
        label=""
        className={classes.var}
        />
           <InputBase
          className={classes.margin}
          defaultValue="Naked input"
          inputProps={{ 'aria-label': 'naked' }}/>
          </div>
          <div className={style.var_wrapper}>
          <FormControlLabel
        control={<Checkbox icon={<RadioButtonUncheckedIcon />} checkedIcon={<RadioButtonUncheckedIcon />} checked={value[2]}/>}
        label=""
        className={classes.var}
        />
           <InputBase
          className={classes.margin}
          defaultValue="Naked input"
          inputProps={{ 'aria-label': 'naked' }}/>
          </div>
          <div className={style.var_wrapper}>
          <FormControlLabel
        control={<Checkbox icon={<RadioButtonUncheckedIcon />} checkedIcon={<RadioButtonUncheckedIcon />} checked={value[3]}/>}
        label=""
        className={classes.var}
        />
           <InputBase
          className={classes.margin}
          defaultValue="Naked input"
          inputProps={{ 'aria-label': 'naked' }}/>
          </div>
          </RadioGroup>
      </div>
    </div>
  );
};

export default Question;
