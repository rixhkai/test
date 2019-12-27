import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import {Typography} from "@material-ui/core";
import {Grid, Box} from "@material-ui/core";
import "./SideBar.css";
import moment from "moment";

const useStyles = makeStyles(theme => ({
 root: {
  width: "100%",
  maxWidth: 500,
  backgroundColor: theme.palette.background.paper,
 }
}));

function ListItemLink(props) {
 return <ListItem button component='a' {...props} />;
}

export const SimpleList = props => {
 const classes = useStyles();
 const date = new moment(props.date);

 return (
  <div className={classes.root} position='sticky' top='0' zindex='100'>
    {" "}
     <Grid container spacing={1} style={{ textAlign:"start" }}>
      <Grid item button >
       <Typography
        variant='h4'
        align='left'
        style={{color: "grey"}}
       > {props.id} </Typography>
      </Grid>
      <Grid item align='start' style={{maxWidth: "300px"}}>
       <Typography variant='body2' style={{fontWeight: "bold", textAlign:"start"}}>
        {props.title}
       </Typography>
       <Typography variant='body2' style={{color: "grey"}}>
        <br />
        {props.author}
        <br />
        {date.format("MMM DD, YYYY")}
       </Typography>
      </Grid>
     </Grid>
  </div>
 );
};
