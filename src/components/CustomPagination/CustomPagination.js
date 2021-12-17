import Pagination from "@mui/material/Pagination";
import React from "react";
import "./CustomPagination.css";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@material-ui/core";

const CustomPagination = ({ setPage, NumOfPages }) => {
  const darktheme = createTheme({
    palette: {
      theme: "dark",
    },
  });

  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };

  return (
    <div className="pagination-container">
      <ThemeProvider theme={darktheme}>
        <Pagination
          count={10}
          color="secondary"
          onChange={(e) => handlePageChange(e.target.textContent)}
          size="large"
          count={NumOfPages}
        />
      </ThemeProvider>
    </div>
  );
};

export default CustomPagination;
