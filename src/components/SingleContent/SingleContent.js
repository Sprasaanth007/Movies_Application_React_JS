import { Badge, ThemeProvider } from "@material-ui/core";
import React from "react";
import { img_300, unavailable } from "../../config/config";
import "./SingleContent.css";
import { createTheme } from "@mui/material/styles";
import { green, yellow } from "@mui/material/colors";
import ContentModel from "../ContentModal/ContentModel";

const SingleContent = ({ id, poster, title, date, media_type, rating }) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: green[500],
      },
      secondary: {
        main: yellow[500],
      },
    },
  });

  return (
    <ContentModel media_type={media_type} id={id}>
      <ThemeProvider theme={theme}>
        <Badge
          badgeContent={rating}
          color={rating > 7 ? "primary" : "secondary"}
        />
      </ThemeProvider>
      <img
        src={poster ? `${img_300}/${poster}` : `${unavailable}`}
        alt={title}
        className="poster"
        style={{ width: "100%" }}
      />
      <div className="title">{title}</div>
      <div className="movie_and_date">
        <div>{media_type === "tv" ? "TV Series" : "Movie"}</div>
        <div>{date}</div>
      </div>
    </ContentModel>
  );
};

export default SingleContent;
