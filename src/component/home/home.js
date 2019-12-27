import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import NavBar from "./NavBar";
import Some from "./Tab";

import ImgMediaCard from "./Content";
import {Onezero} from "../category/OneZero";

const useStyles = makeStyles(theme => ({
 root: {
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center"
 },

 toolBar: {
  backgroundColor: "white!important",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "100%",
  maxWidth: "1032px",
  margin: "0px auto 0px auto"
 },

 iconBar: {
  display: "flex",
  flexDirection: "row",
  alignItems: "center"
 },

 contentFeedContainer: {
  maxWidth: "1032px",
  width: "100%",
  margin: "48px auto 0px auto"
 },

 tab: {
  backgroundColor: "white",
  position: "sticky",
  top: 0,
  zIndex: 100
 },

 align:{
     align: "start"
 }
}));

export const Home = () => {
 const classes = useStyles();
 return (
  <Grid>
   {/* NAV BAR */}
   <NavBar />
   <Grid className={classes.tab}>
    <Some />
   </Grid>

   {/* FEATURED FEED */}
   <div className={classes.align}>
   <ImgMediaCard />
   </div>
   {/* CONTENT FEED*/}
  </Grid>
 );
};
