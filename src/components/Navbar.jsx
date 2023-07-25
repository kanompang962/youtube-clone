import React, { useCallback, useState } from "react";
import { logo } from "../utils/constants";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import {
  AccountCircle,
  ArrowBackRounded,
  Notifications,
  Search,
  SearchOutlined,
  Settings,
} from "@mui/icons-material";

const Navbar = () => {
  const [showMobileSearch, setshowMobileSearch] = useState(false);

  const handleSwitSearch = useCallback(() => {
    setshowMobileSearch((current) => !current);
  }, []);

  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      gap={2}
      sx={{
        position: "sticky",
        backgroundColor: "#000",
        top: 0,
        justifyContent: showMobileSearch ? "center" : "space-between",
      }}
    >
      {/* Logo */}
      <Box display={`${showMobileSearch ? "none" : "flex"}`}>
        <Link to="/">
          <img src={logo} alt="logo" height={45} />
        </Link>
      </Box>
      {/* Icon Back */}
      <Box display={showMobileSearch ? "flex" : "none"}>
        <IconButton onClick={handleSwitSearch} sx={{ color: "#fff" }}>
          <ArrowBackRounded />
        </IconButton>
      </Box>
      {/* Search */}
      <SearchBar
        showMobileSearch={showMobileSearch}
        setshowMobileSearch={setshowMobileSearch}
      />
      {/* Icon */}
      <Stack
        display={`${showMobileSearch ? "none" : ""}`}
        direction="row"
        alignItems="center"
      >
        <IconButton
          onClick={handleSwitSearch}
          sx={{ display: { md: "none" }, color: "#fff", opacity: "0.7" }}
        >
          <Search />
        </IconButton>
        <IconButton sx={{ color: "#fff", opacity: "0.7" }}>
          <Settings />
        </IconButton>
        <IconButton sx={{ color: "#fff", opacity: "0.7" }}>
          <Notifications />
        </IconButton>
        <IconButton sx={{ color: "#fff", opacity: "0.7" }}>
          <AccountCircle />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default Navbar;
