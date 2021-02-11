import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../static/img/logo.svg";
import style from '../static/style/Components.module.sass';

const Header:React.FC= () =>{
    return(
        <header className={style.header}>
        <div className={style.container}>
          <div className={style.header_wrapper}>
            <NavLink to="/"><img src={logo} alt="logo" /></NavLink>
            <div className={style.menu}>
            <p className={style.pointer}>помощь</p>
            <div className={style.help}>
              <p>
                <span className={style.span}>Логин</span> и пароль вы можете узнать у вашего преподавателя
              </p>
            </div>
            </div>
          </div>
        </div>
      </header>
    )
}

export default Header;