import React, { useState } from "react";
import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  search,
  SettingsOutlined,
  ArroDropDownOutline,
} from "@mui/icons-material";
import FlexBetween from "components/FlexBetween";
import { useDispatch } from "react-redux";
import { setMode } from "state";
import profileImage from "assets/profile.jpg";
import { AppBar, Toolbar, useTheme } from "@mui/material";

const Navbar = () => {
  const dispatch = useDispatch();
  const theme = useTheme();

  return (
    <AppBar sx={{ position: "static", background: "none", boxShadow: "none" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Left Side  */}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
