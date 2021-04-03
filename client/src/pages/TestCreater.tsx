import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import add_button from '../static/img/add_button.svg'

import NavBarAdmin from "../components/NavBarAdmin";

import style from "../static/style/Test_creater.module.sass";
import TopPanel from "../components/TopPanel";
import { Button, ClickAwayListener, FormControlLabel, Grow, makeStyles, MenuItem, MenuList, Paper, Popper, TextField, withStyles } from "@material-ui/core";
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
    display: "inline-block",
    marginLeft: 50,
    marginBottom: 25,
    '& input': {
      width: 410,
    }
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  checkbox_field:{
    '& span':{
      color: "#000"
    }
  },
  menu_wrapper :{
    width: 410,
    textAlign: "center",
    "& li":{
    }
  }
}));

const TestCreater: React.FC = () => {

  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLInputElement>(null);
  const sectionArray = ["Тест 1","Тест 2","Тест 3"]

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: React.MouseEvent<EventTarget>) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);


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
              <div className={style.section_choose}>
        <TextField
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          
          className={classes.text_field}
          placeholder="Выберите раздел для этого теста"
        >
          Toggle Menu Grow
        </TextField>
        <img src={add_button} alt="add_button" className={style.add_button} onClick={handleToggle} />
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal className={classes.menu_wrapper}>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    {sectionArray.map((elem)=>{
                      return <MenuItem onClick={handleClose}>{elem}</MenuItem>
                    })}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
            </div>
            <div className={style.random_order}>
            <Checkbox className={classes.checkbox_field}/>
            <p>Случайный порядок вопросов</p>
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
