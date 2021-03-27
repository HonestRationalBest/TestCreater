import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import logo from "../static/img/logo.svg";
import style from '../static/style/Components.module.sass';

const Header:React.FC= () =>{


    const history = useHistory()


    return(
        <header className={style.header}>
        <div className={style.container}>
          <div className={style.header_wrapper}>
            <NavLink to="/"><img src={logo} alt="logo" /></NavLink>
            <div className={style.menu}>

            {history.location.pathname === "/" ? <NavLink to="/"></NavLink> :
              history.location.pathname === "/student_register"
              ? <NavLink to="/student_login">Войти</NavLink>
              : history.location.pathname === "/teacher_register"
              ? <NavLink to="/teacher_login">Войти</NavLink>
              : history.location.pathname === "/student_login"
              ? <NavLink to="/student_register">Создать аккаунт</NavLink>
              : <NavLink to="/teacher_register">Создать аккаунт</NavLink>

             }
            </div>
          </div>
        </div>
      </header>
    )
}

export default Header;