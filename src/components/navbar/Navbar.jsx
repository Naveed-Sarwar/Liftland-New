import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Drawer,
  ListItem,
  List,
  Menu,
  Avatar,
  MenuItem,
  Badge,
} from "@material-ui/core";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import SettingsIcon from "@material-ui/icons/Settings";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CloseIcon from "@material-ui/icons/Close";
import ProfileImg from "../../assets/profile.png";
import { Link, useLocation } from "react-router-dom";
import UseWindowDimensions from "../../customHooks/UseWindowDimensions";
import { UseSidebar } from "../../pages/sidebar/UseSidebar";

const useStyles = makeStyles({
  Navbar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "5px 10px 0px 10px ",
    opacity: 0.6,
  },
  drawerMobile: {
    opacity: 0.95,
    minHeight: "100vh",
  },
  list: {
    width: 250,
    minHeight: "99vh",
    margin: "5px 8px 0px 0px",
  },
  link: {
    textDecoration: "none",
    color: "black",
  },
  crossIcon: {
    margin: "5px 0px 0px 10px",
  },
  fullList: {
    width: "auto",
  },
  iconSection: {
    color: "#AEAEAE",
    marginTop: 7,
    marginRight: 10,
  },
  iconSectionTwo: {
    color: "#AEAEAE",
    marginTop: 8,
    marginRight: 20,
  },
  menuIcon: {
    border: "none",
    color: "#AEAEAE",
    background: "transparent",
  },
  menuIconTop: {
    paddingTop: 7,
    color: "#AEAEAE",
  },
  routeName: {
    paddingTop: 5,
  },
  routeTextMobile: {
    fontFaimly: "Roboto",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "20px",
    color: "#000",
    marginLeft: "-36px",
    marginTop: "5px",
  },
  mobileOpen: {
    display: "flex",
    justifyContent: "space-between",
    margin: "5px 30px 0px 5px",
  },
  btns: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
    textDecoration: "none",
    marginTop: 150,
    marginBottom: 150,
    boxShadow: "none",
  },
  mobileView: {
    display: "flex",
    width: "130px",
    justifyContent: "space-between",
  },
  logoutBtnMobile: {
    left: 20,
    bottom: 40,
    position: "absolute",
    width: "90%",
  },
});

export default function Navbar({ state, toggleDrawer, setState }) {
  const classes = useStyles();
  const [{ menuItems, logoutMobile, handleDrawerToggle }] = UseSidebar();

  const { width } = UseWindowDimensions();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const anchorRef = React.useRef(null);
  const location = useLocation();

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.Navbar}>
      <Drawer
        className={classes.drawerMobile}
        anchor={"top"}
        open={state}
        onClose={toggleDrawer}
      >
        <div className={classes.mobileOpen}>
          <div onClick={toggleDrawer} className={classes.crossIcon}>
            <CloseIcon />
          </div>{" "}
          <div className={classes.mobileViewName}>
            {menuItems.map((text, index) => {
              return (
                <div
                  className={classes.routeTextMobile}
                  ref={anchorRef}
                  key={index}
                >
                  {location?.pathname === text?.path ? <>{text.text}</> : null}
                </div>
              );
            })}
          </div>
          <div className={classes.mobileView}>
            <div className={classes.iconSectionTwo}>
              <Badge color="secondary" badgeContent={0} showZero>
                <NotificationsNoneIcon />
              </Badge>
            </div>
            <div className={classes.iconSection}>
              <SettingsIcon />
            </div>
            <div>
              <Avatar alt="Travis Howard" src={ProfileImg} />
            </div>
            <span
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
              className={classes.menuIconTop}
            >
              <ExpandMoreIcon />
            </span>
            <Menu
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>{" "}
          </div>{" "}
        </div>{" "}
        <List className={classes.btns}>
          {menuItems?.map((text, index) => (
            <Link className={classes.link} to={text?.path} key={index}>
              <ListItem
                ref={anchorRef}
                button
                onClick={width < 900 ? toggleDrawer : null}
                onFocus={location?.pathname === text?.path}
                style={
                  location?.pathname === text?.path
                    ? {
                        backgroundColor: "#5654C8",
                        color: "#fff",
                        borderRadius: 10,
                        textDecoration: "none",
                      }
                    : null
                }
                key={index}
              >
                <ListItemIcon
                  style={
                    location?.pathname === text?.path
                      ? {
                          color: "#fff",
                        }
                      : null
                  }
                  Active={location?.pathname === text?.path}
                  onClick={toggleDrawer}
                >
                  {text.icon}
                </ListItemIcon>

                <ListItemText
                  onClick={toggleDrawer}
                  Active={location?.pathname === text?.path}
                  primary={text.text}
                />
              </ListItem>{" "}
            </Link>
          ))}
        </List>{" "}
        <List className={classes.logoutBtnMobile}>
          {logoutMobile?.map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{text.icon}</ListItemIcon>
              <ListItemText primary={text.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}
