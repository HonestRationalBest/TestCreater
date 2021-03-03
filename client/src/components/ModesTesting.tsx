import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

import style from "../static/style/NavBars.module.sass";

const ModesTesting: React.FC = () => {

  const [toggleMenu, setToggleMenu] = useState<boolean>(false)

  return (
    <div className={style.top_navbar_wrapper}>
        <ul className={style.modes}>
          <li>
            <NavLink to="/testingedit"
            activeStyle={{
                color: "#000"
              }}
              >Редактирование</NavLink>
          </li>
          <li>
            <NavLink to="/testingwatch"  activeStyle={{
                color: "#000"
              }}>Режим просмотра</NavLink>
          </li>
        </ul>
      <div className={style.user} onClick={()=>setToggleMenu(!toggleMenu)}>
        <p>user</p>
        <div className={style.circle}></div>
        { toggleMenu && <div className={style.menu}>
          <ul>
            <li>
              <NavLink to="/" className={style.gradient}>
                Выйти
              </NavLink>
            </li>
          </ul>
        </div>}
      </div>
    </div>
  );
};

export default ModesTesting;
