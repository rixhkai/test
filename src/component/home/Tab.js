import React, {Component} from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import HelpIcon from "@material-ui/icons/Help";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import ThumbDown from "@material-ui/icons/ThumbDown";
import ThumbUp from "@material-ui/icons/ThumbUp";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import HomeIcon from "@material-ui/icons/Home";
import MovieIcon from "@material-ui/icons/Movie";
import {ImgMediaCard} from "./Content";
//import Onezero from './category/OneZero';
import axios from "axios";
import Api from "../../utils/Api";
import { CategoryN } from "../../_actions/ActCategory";
import { connect } from "react-redux";

const thing = [
 {
  id: 0,
  title: "HOME",
  href: "/"
 },
 {
  id: 1,
  title: "ONEZERO",
  href: "/category"
 },
 {
  id: 2,
  title: "ELEMENTAL"
 },
 {
  id: 3,
  title: "GEN",
  href: ""
 },
 {
  id: 4,
  title: "ZORA",
  href: ""
 },
 {
  id: 5,
  title: "FORGE",
  href: ""
 },
 {
  id: 6,
  title: "HUMAN PARTS",
  href: ""
 },
 {
  id: 7,
  title: "MARKER"
 },
 {
  id: 8,
  title: "LEVEL"
 },
 {
  id: 9,
  title: "HEATED"
 },
 {
  id: 10,
  title: "MODUS"
 },
 {
  id: 11,
  title: "MORE"
 }
];

const styles = theme => ({
 root: {
  flexGrow: 1,
  width: "100%",
  backgroundColor: theme.palette.background.paper
 }
});

class TabScroll extends Component {
 constructor() {
  super();
  this.state = {
   category: []
  };
 }

 componentDidMount() {
  console.log("try to get");
  // Api.get("categories")
  //  .then(res => {
  //   const temp = res.data;
  //   console.log("success");
  //   console.log(temp);
  //   this.setState({category: temp});
  //  })
  //  .catch(err => {
  //   console.log(err);
  //  });

   this.props.dispatch(CategoryN());
 }
 render() {
  const {classes} = this.props;

  return (
   <div className={classes.root}>
    <div position='static' color='default' align='center'>
     <Tabs
      style={{maxWidth: "1032px"}}
      alignitems='center'
      variant='scrollable'
      scrollButtons='on'
      indicatorColor='primary'
      textColor='primary'
      aria-label='scrollable force tabs example'
     >
      {this.props.cat.cats.map(item => (
       <Tab label={item.name} href={`/category/${item.id}`} />
      ))}
     </Tabs>
    </div>
   </div>
  );
 }
}

const mapStateToProps = state => {
  return {
    cat: state.CatReducer
  };
}

export default connect(mapStateToProps)(withStyles(styles)(TabScroll));
