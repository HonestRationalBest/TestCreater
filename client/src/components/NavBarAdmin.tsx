import React from "react";
import { NavLink } from "react-router-dom";

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

const NavBarAdmin: React.FC = () => {
  const useStyles = makeStyles({
    root: {
      width: 230,
      background: "#5E44E3",
      color: "white",
      boxShadow: "none",
    },
    icons: {
      fill: "white",
    },
    paddingTop: {
      paddingTop: "200px",
    },
    distanceBetweenItem: {
      paddingTop: "40px",
    },
  });

  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
        <MenuList className={classes.paddingTop}>
          <MenuItem>
            <ListItemIcon>
              <CreateIcon className={classes.icons} />
            </ListItemIcon>
            <Typography variant="inherit">Конструктор тестов</Typography>
          </MenuItem>
          <MenuItem className={classes.distanceBetweenItem}>
            <ListItemIcon>
              <EventNoteIcon className={classes.icons} />
            </ListItemIcon>
            <Typography variant="inherit">Тестирование</Typography>
          </MenuItem>
          <MenuItem className={classes.distanceBetweenItem}>
            <ListItemIcon>
              <ExtensionIcon className={classes.icons} />
            </ListItemIcon>
            <Typography variant="inherit" noWrap>
              Теория
            </Typography>
          </MenuItem>
          <MenuItem className={classes.distanceBetweenItem}>
            <ListItemIcon>
              <ImportantDevicesIcon className={classes.icons} />
            </ListItemIcon>
            <Typography variant="inherit" noWrap>
              Практика
            </Typography>
          </MenuItem>
          <MenuItem className={classes.paddingTop}>
            <ListItemIcon>
              <SettingsIcon className={`${classes.icons}`} />
            </ListItemIcon>
            <Typography variant="inherit" noWrap>
              База данных
            </Typography>
          </MenuItem>
        </MenuList>
      </Paper>
    </div>
  );
};

export default NavBarAdmin;
