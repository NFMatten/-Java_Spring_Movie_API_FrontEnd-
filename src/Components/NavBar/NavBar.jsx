import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Popper from "@mui/material/Popper";
import "./NavBar.css";

export default function ButtonAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Popper id={id} open={open} anchorEl={anchorEl}>
            <Box
              sx={{
                p: 1,
                bgcolor: "#1976d2",
                ml: 1,
                minHeight: 75,
              }}
            >
              <ul className="ul-style">
                <li className="li-style">
                  <a
                    className="popover-link"
                    href="https://github.com/NFMatten/Java_Spring_Movie_API_FrontEnd"
                  >
                    Movie Library Frontend
                  </a>
                </li>
                <li className="li-style">
                  <a
                    className="popover-link"
                    href="https://github.com/NFMatten/Java_Spring_Movie_API"
                  >
                    Movie Library Backend
                  </a>
                </li>
              </ul>
            </Box>
          </Popper>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Movie Library
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
