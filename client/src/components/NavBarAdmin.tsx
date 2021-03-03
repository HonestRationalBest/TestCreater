import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../static/img/logo.svg";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Typography from "@material-ui/core/Typography";

import CreateIcon from "@material-ui/icons/Create";
import EventNoteIcon from "@material-ui/icons/EventNote";
import ExtensionIcon from "@material-ui/icons/Extension";
import ImportantDevicesIcon from "@material-ui/icons/ImportantDevices";
import SettingsIcon from "@material-ui/icons/Settings";

import style from "../static/style/NavBars.module.sass";

const NavBarAdmin: React.FC = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.fixed}>
        <img src={logo} className={style.logo} alt="logo" />
        <ul className={style.list}>
          <div className={style.list}>
            <ul>
              <NavLink to="/test_creater">
                <CreateIcon />
                <li>Конструктор тестов</li>
              </NavLink>
              <NavLink to="/testingedit">
                <EventNoteIcon />
                <li>Тестирование</li>
              </NavLink>
              <NavLink to="/theoryedit">
                <ExtensionIcon />
                <li>Теория</li>
              </NavLink>
              <NavLink to="/practice">
                <ImportantDevicesIcon />
                <li>Практика</li>
              </NavLink>
              <NavLink to="/data_base" className={style.database}>
                <SettingsIcon />
                <li>База данных</li>
              </NavLink>
            </ul>
          </div>
        </ul>
      </div>
    </div>
  );

  // const useStyles = makeStyles({
  //   root: {
  //     position: "static",
  //   },
  //   wrapper: {
  //     width: 270,
  //     height: " 100%",
  //     background: "#5E44E3",
  //     color: "white",
  //     boxShadow: "none",
  //     position: "fixed",
  //   },
  //   icons: {
  //     fill: "white",
  //   },
  //   icon_wrapper: {
  //     minWidth: "10",
  //   },
  //   paddingTop: {
  //     paddingTop: "200px",
  //   },
  //   marginTop: {
  //     marginTop: "200px",
  //   },
  //   distanceBetweenItem: {
  //     marginTop: "40px",
  //   },
  // });

  // const classes = useStyles();

  // return (
  //   <div className={classes.wrapper}>
  //     <MenuList className={classes.paddingTop}>
  //       <MenuItem>
  //         <ListItemIcon className={classes.icon_wrapper}>
  //           <CreateIcon className={classes.icons} />
  //         </ListItemIcon>
  //         <Typography variant="inherit">Конструктор тестов</Typography>
  //       </MenuItem>
  //       <MenuItem className={classes.distanceBetweenItem}>
  //         <ListItemIcon>
  //           <EventNoteIcon className={classes.icons} />
  //         </ListItemIcon>
  //         <Typography variant="inherit">Тестирование</Typography>
  //       </MenuItem>
  //       <MenuItem className={classes.distanceBetweenItem}>
  //         <ListItemIcon>
  //           <ExtensionIcon className={classes.icons} />
  //         </ListItemIcon>
  //         <Typography variant="inherit" noWrap>
  //           Теория
  //         </Typography>
  //       </MenuItem>
  //       <MenuItem className={classes.distanceBetweenItem}>
  //         <ListItemIcon>
  //           <ImportantDevicesIcon className={classes.icons} />
  //         </ListItemIcon>
  //         <Typography variant="inherit" noWrap>
  //           Практика
  //         </Typography>
  //       </MenuItem>
  //       <MenuItem className={classes.marginTop}>
  //         <ListItemIcon>
  //           <SettingsIcon className={`${classes.icons}`} />
  //         </ListItemIcon>
  //         <Typography variant="inherit" noWrap>
  //           База данных
  //         </Typography>
  //       </MenuItem>
  //     </MenuList>
  //   </div>
  // );
};

export default NavBarAdmin;
