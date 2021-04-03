import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import style from "../static/style/NavBars.module.sass";



const TopPanel: React.FC<{ modes: string }> = ({modes}) => {

  const [toggleMenu, setToggleMenu] = useState<boolean>(false)


  const handleExit = () =>{
    localStorage.removeItem('userData')
    window.location.reload()
  }

  return (
    <div className={style.top_navbar_wrapper}>
      <div  className={style.modes}>
        <ul>
         {modes === "testing" ? <>
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
          </>:
          modes === "theory" ?
          <>
          <li>
             <NavLink to="/theoryedit"
              activeStyle={{
                color: "#000"
              }}
              >Редактирование</NavLink>
          </li>
          <li>
          <NavLink to="/theorywatch"  activeStyle={{
                color: "#000"
              }}>Режим просмотра</NavLink>
          </li>
          </>
          :
          <>
          </>
          }
        </ul>
      </div>
      <div className={style.user} onClick={()=>setToggleMenu(!toggleMenu)}>
        <p>user_1</p>
        <div className={style.circle}></div>
        {toggleMenu && <div className={style.menu}>
          <ul>
            <li>
              <p className={style.gradient} onClick={handleExit}>
                Exit
              </p>
            </li>
          </ul>
        </div>}
      </div>
    </div>
  );  
};

export default TopPanel;
