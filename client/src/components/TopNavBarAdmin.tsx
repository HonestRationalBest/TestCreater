import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

import style from "../static/style/NavBars.module.sass";

const TopNavBarAdmin: React.FC = () => {

  const [toggleMenu, setToggleMenu] = useState<boolean>(false)

  return (
    <div className={style.top_navbar_wrapper}>
      <div>
        <ul className={style.modes}>
          <li>
            <NavLink to="/test_creater"></NavLink>
          </li>
        </ul>
      </div>
      <div className={style.user} onClick={()=>setToggleMenu(!toggleMenu)}>
        <p>user</p>
        <div className={style.circle}></div>
        {toggleMenu && <div className={style.menu}>
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

export default TopNavBarAdmin;
