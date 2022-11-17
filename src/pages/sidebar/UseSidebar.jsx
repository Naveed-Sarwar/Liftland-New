import React from "react";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import UseWindowDimensions from "../../customHooks/UseWindowDimensions";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import SpaOutlinedIcon from "@material-ui/icons/SpaOutlined";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
export const UseSidebar = () => {
  const { width } = UseWindowDimensions();
  const [mobileOpen, setMobileOpen] = React.useState(
    width > 900 ? true : false
  );

  const menuItems = [
    {
      text: "Dashboard",
      icon: <HomeOutlinedIcon />,
      path: "/dashboard",
    },
    {
      text: "Programmazione",
      icon: <SpaOutlinedIcon />,
      path: "/program",
    },
    {
      text: "Clienti",
      icon: <PeopleOutlineIcon />,
      path: "/clienti",
    },
    {
      text: "Profile",
      icon: <PersonOutlineIcon />,
      path: "/profile",
    },
  ];

  const logout = [
    {
      text: "Setting",
      icon: <SettingsIcon />,
      path: "/logout",
    },
  ];
  const logoutMobile = [
    {
      text: "Logout",
      icon: <ExitToAppIcon />,
      path: "/logout",
    },
  ];
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return [
    {
      // mobileOpen,
      handleDrawerToggle,
      menuItems,
      logout,
      logoutMobile,
    },
  ];
};
