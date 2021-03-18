import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import logo from "../static/img/logo.svg";
import style from '../static/style/Components.module.sass';

const Header:React.FC= () =>{


    const history = useHistory()

    console.log(history.location.pathname)

    return(
        <header className={style.header}>
        <div className={style.container}>
          <div className={style.header_wrapper}>
            <NavLink to="/"><img src={logo} alt="logo" /></NavLink>
            <div className={style.menu}>

            {history.location.pathname === "/" ? <NavLink to="/"></NavLink> :
              history.location.pathname === "/register"
              ? <NavLink to="/login">Войти</NavLink>
              : <NavLink to="/register">Создать аккаунт</NavLink>  }
            </div>
          </div>
        </div>
      </header>
    )
}

export default Header;