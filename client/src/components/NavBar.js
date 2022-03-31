import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";

const useStyles = makeStyles({
  header: {
    backgroundColor: "navy",
  },
});

const NavBar = () => {
  const classes = useStyles();

  return (
    <AppBar
      position="static"
      /*color="secondary"*/
      /*style={{backgroundColor: "navy", color: 'black', boxShadow: '0px 0px 0px 0px' }}*/
      className={classes.header}
    >
      <Toolbar>
        <IconButton aria-label="app" color="inherit">
          <Menu />
        </IconButton>
        <Typography variant="">Hello</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
