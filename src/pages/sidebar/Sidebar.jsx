import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { UseSidebar } from "./UseSidebar";
import UseWindowDimensions from "../../customHooks/UseWindowDimensions";
import { useLocation, Link } from "react-router-dom";
import SettingsIcon from "@material-ui/icons/Settings";
import Avatar from "@material-ui/core/Avatar";
import Badge from "@material-ui/core/Badge";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ProfileImg from "../../assets/profile.png";
import Logo from "../../assets/logo.png";
import Navbar from "../../components/navbar/Navbar";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    background: "white",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    background: "white",
    color: "#000",
    boxShadow: "none",
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    background: "white",
    color: "#000",
    boxShadow: "none",
  },
  appBarShifTwo: {
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    background: "white",
    color: "#000",
    boxShadow: "none",
  },

  tool: {
    display: "flex",
    justifyContent: "space-between",
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    //   display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    background: "transparent",
    opacity: 2,
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    background: "white",
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    background: "white",

    "@media (max-width: 700px)": {
      padding: theme.spacing(0),
    },
  },
  link: {
    display: "flex",
    textDecoration: "none",
    marginLeft: 6,
    marginTop: 10,
    width: 224,
    color: "black",
  },
  drawerPaper: {
    width: " 100%",
    background: "transparent",
    opacity: 2,
  },
  btns: {
    marginTop: 100,
  },
  logoutBtn: {
    left: 0,
    bottom: 20,
    position: "absolute",
  },
  logo: {
    marginTop: 20,
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
  },
  draw: {
    background: "transparent",
  },
  iconSection: {
    display: "flex",
    justifyContent: "space-between",
  },
  routeName: {
    paddingTop: 5,
  },
  routeText: {
    fontFaimly: "Roboto",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "20px",
    marginLeft: "-36px",
    marginTop: "5px",
    lineFeight: "29px",
  },
  menuIcon: {
    border: "none",
    color: "#AEAEAE",
    background: "transparent",
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
  menuMain: {
    display: "flex",
  },
  badgeSection: {
    display: "flex",
    width: "150px",
    justifyContent: "space-between",
  },
}));

export default function Sidebar({ children }) {
  const classes = useStyles();
  const location = useLocation();
  const { width } = UseWindowDimensions();
  const [open, setOpen] = React.useState(width > 900 ? true : false);
  const [{ menuItems, logout, handleDrawerToggle }] = UseSidebar();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const anchorRef = React.useRef(null);
  const [state, setState] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const toggleDrawer = () => {
    setState(!state);
  };

  return (
    <div className={classes.root}>
      {width < 900 ? (
        <Navbar state={state} setState={setState} toggleDrawer={toggleDrawer} />
      ) : null}{" "}
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [width > 900 ? classes.appBarShift : classes.appBarShifTwo]:
            width > 900 ? open : state,
        })}
        // style={width > 900 ? { width: `calc(100% - ${drawerWidth}px)` } : null}
      >
        <Toolbar className={classes.tool}>
          <div className={classes.menuMain}>
            <IconButton
              color="inherit"
              main
              aria-label="open drawer"
              onClick={width > 900 ? handleDrawerOpen : toggleDrawer}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: width > 900 ? open : state,
              })}
            >
              <MenuIcon />
            </IconButton>
            <div className={classes.routeName}>
              <>
                {menuItems.map((text, index) => {
                  return (
                    <div
                      className={classes.routeText}
                      ref={anchorRef}
                      key={index}
                    >
                      {location?.pathname === text?.path ? (
                        <>{text.text}</>
                      ) : null}
                    </div>
                  );
                })}
              </>
            </div>{" "}
          </div>
          <div className={classes.badgeSection}>
            <div className={classes.iconSectionTwo}>
              <Badge color="secondary" badgeContent={0} showZero>
                <NotificationsNoneIcon />
              </Badge>{" "}
            </div>{" "}
            <div className={classes.iconSection}>
              <SettingsIcon />{" "}
            </div>
            <div>
              <Avatar alt="Travis Howard" src={ProfileImg} />
            </div>
            <button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
              className={classes.menuIcon}
            >
              <ExpandMoreIcon />
            </button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>{" "}
          </div>
        </Toolbar>
      </AppBar>
      <div style={{ display: width > 900 ? "block" : "none" }}>
        <Drawer
          variant={width > 900 ? "permanent" : "persistent"}
          anchor="left"
          open={open}
          className={
            width > 900
              ? clsx(classes.drawer, {
                  [classes.drawerOpen]: open,
                  [classes.drawerClose]: !open,
                })
              : classes.drawer
          }
          classes={
            width > 900
              ? {
                  paper: clsx({
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                  }),
                }
              : {
                  paper: classes.drawerPaper,
                }
          }
        >
          {open == true ? (
            <div className={classes.logo}>
              <img src={Logo} />
            </div>
          ) : null}
          <List className={classes.btns}>
            {menuItems?.map((text, index) => (
              <Link className={classes.link} to={text?.path} key={index}>
                <ListItem
                  ref={anchorRef}
                  button
                  onClick={width < 900 ? handleDrawerToggle : null}
                  onFocus={location?.pathname === text?.path}
                  style={
                    location?.pathname === text?.path
                      ? {
                          backgroundColor: "#5654C8",
                          color: "#fff",
                          borderRadius: 10,
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
                  >
                    {text.icon}
                  </ListItemIcon>
                  <ListItemText
                    Active={location?.pathname === text?.path}
                    primary={text.text}
                  />
                </ListItem>{" "}
              </Link>
            ))}
          </List>
          <List className={classes.logoutBtn}>
            {logout.map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{text.icon}</ListItemIcon>
                <ListItemText primary={text.text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </div>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
}
