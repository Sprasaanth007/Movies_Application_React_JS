import * as React from "react";
import { useEffect } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import SearchIcon from "@mui/icons-material/Search";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import TvIcon from "@mui/icons-material/Tv";
import "./BottomNavbar.css";
import { useNavigate } from "react-router-dom";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    if (value === 0) navigate("/");
    if (value === 1) navigate("/movies");
    if (value === 2) navigate("/series");
    if (value === 3) navigate("/search");
  }, [value]);

  return (
    <Box className="bottom-navigation-bar">
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        style={{ background: "rgb(5, 27, 46)" }}
      >
        <BottomNavigationAction
          label="Trending"
          icon={<WhatshotIcon />}
          style={{ color: "white" }}
        />

        <BottomNavigationAction
          label="Movies"
          icon={<MovieCreationIcon />}
          style={{ color: "white" }}
        />

        <BottomNavigationAction
          label="TV Series"
          icon={<TvIcon />}
          style={{ color: "white" }}
        />

        <BottomNavigationAction
          label="Search"
          icon={<SearchIcon />}
          style={{ color: "white" }}
        />
      </BottomNavigation>
    </Box>
  );
}
