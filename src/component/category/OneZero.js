import React, {Component} from "react";
import {withStyles} from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import {CardMedia, CardActionArea, Box, Button, Card} from "@material-ui/core";
import {Grid} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import {CatAppBar} from "./CatBar";
import Api from "../../utils/Api";

const middleData = [
 {
  title: "How to Remove Array Duplicates in ES6",
  img:
   "https://cdn-images-1.medium.com/focal/190/195/51/57/1*Z1SU1atGbGMgY_jHaDyMGA.png",
  desc:
   "Let’s look at the 3 ways in ES6 to filter out duplicates from a JS array and return only the unique values. Using Set, Filter, and Reduce.",
  author: "Samantha Ming in DailyJS",
  date: "Jan 14 • 4 min read"
 },
 {
  title: "Reusing code between React Js and React Native effectively",
  img:
   "https://cdn-images-1.medium.com/fit/c/190/195/1*W21Yvoor2nIr3dnZ46tNYw.jpeg",
  desc: "",
  author: "Harnoor Bandesh in codeburst",
  date: "May 6 • 6 min read"
 },
 {
  title: "Is Kotlin Better Than Java for Android App Development?",
  img:
   "https://cdn-images-1.medium.com/fit/c/190/195/1*73oXq1pNNQoEUd9pOq4jXA.jpeg",
  desc: "Comparing two different ways of writing Android apps",
  author: "Himanshu Verma in Better Programming",
  date: "Nov 24 • 5 min read"
 },
 {
  title: "How We Handled a Large-scale AndroidX Migration",
  img:
   "https://cdn-images-1.medium.com/focal/190/195/49/57/1*55rIj4xRqg5XcTWAhkwlJA.jpeg",
  desc: "Key takeaways from Gojek’s consumer app migration.",
  author: "Abhishek Birdawade in Gojek Product + Tech",
  date: "Dec 6 • 6 min read"
 },
 {
  title: "Code Review Best Practices",
  img:
   "https://cdn-images-1.medium.com/fit/c/190/195/1*O0Vxl1Vajl21Kt288ybc-w.png",
  desc:
   "The Internet provides a wealth of material on code reviews: on the effect of code reviews on company culture, on formal security reviews…",
  author: "Palantir in Palantir Blog",
  date: "Mar 5, 2018 • 12 min read"
 }
];

const styles = theme => ({
 root: {
  width: "100%",
  maxWidth: "680px",
  backgroundColor: theme.palette.background.paper,
  paddingRight: "24px"
 },
 inline: {
  display: "inline"
 },

 normalSize: {
  width: "152px",
  height: "128px"
 },

 font: {
  fontFamily: "onezero-yellix-alt, sans-serif",
  fontSize: "20px",
  flex: "1 1 auto",
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: "auto",
  maxWidth: "540px"
 },

 button: {
  border: "4px"
 },
 cover: {
  width: 100,
  height: 100
 },

 cards: {
  display: "flex"
 },

 content: {
  flex: "1 0 auto",
  paddingLeft: theme.spacing(1),
  maxWidth: "300px"
 }
});

class Onezero extends Component {
 constructor() {
  super();
  this.state = {
   art: []
  };
 }

 //  query = new URLSearchParams(window.location.search);
 //  id = this.query("id");
 componentDidMount() {
  const {id} = this.props.match.params;
  console.log("try to Get articles");
  Api.get("category/" + id + "/article").then(res => {
   const temp = res.data.article;
   console.log("succes");
   console.log(res);
   this.setState({art: temp});
  });
 }

 render() {
  const {classes} = this.props;
  return (
   <div>
    <CatAppBar />
    <div align='center' style={{marginTop: "50px"}}>
     <Grid
      container
      spacing={1}
      flexDirection='column'
      style={{maxWidth: "900px"}}
     >
      <Grid item>
       <img
        width='200px'
        height='45px'
        src='https://miro.medium.com/max/400/1*cw32fIqCbRWzwJaoQw6BUg.png'
       />
      </Grid>
      <Grid item>
       <Typography component='div' style={{paddingLeft: "10px"}}>
        <Box
         className={classes.font}
         textAlign='left'
         fontFamily='onezero-yellix-alt'
        >
         The front lines of the future. A Medium publication about tech and
         science.
        </Box>
       </Typography>
      </Grid>

      <Grid
       item
       style={{width: "30px", marginLeft: "auto", textAlign: "right"}}
      >
       <br />
       <Button
        size='small'
        variant='outlined'
        color='primary'
        href='#outlined-buttons'
       >
        Follow
       </Button>
      </Grid>
     </Grid>
    </div>
    <Grid style={{display: "flex", flexGrow: 1}}>
     <Grid
      container
      spacing={1}
      justify='center'
      style={{
       display: "flex",
       width: "1080px",
       marginLeft: "200px",
       flexDirection: "column"
      }}
     >
      <Grid item align='center'>
       <img
        height='354px'
        src='https://miro.medium.com/max/945/1*TBVJ41WGvXQMDZTLhl0RbA.jpeg'
       />
      </Grid>
      <Grid
       item
       xs={9}
       align='center'
       justify='center'
       style={{backgroundColor: "blue", color: "white"}}
      >
       <Typography
        textAlign='center'
        style={{fontSize: "18px", maxWidth: "400px"}}
       >
        Uber Delivery Workers in Mexico Are Tracking Thieves Through Google Maps
        and WhatsApp Networks
       </Typography>
       <Typography textAlign='center' style={{fontSize: "14px"}}>
        A 1,000-person WhatsApp community keeps delivery workers safe
       </Typography>
      </Grid>
     </Grid>
    </Grid>
    <Container align='center'>
     <Grid
      style={{
       display: "flex",
       flexGrow: 1,
       maxWidth: "1080px",
       justifyContent: "center"
      }}
     >
      <Grid
       item
       xs={12}
       style={{
        padding: "24px 40px",
        width: "800px",
        flexDirection: "row",
        backgroundColor: "blue",
        color: "white"
       }}
      >
       <Grid item xs={12}>
        <Typography textAlign='center' style={{fontSize: "18px"}}>
         The Influencer and the Hit Man
        </Typography>
       </Grid>
       <Grid item xs={12}>
        <Typography textAlign='center' style={{fontSize: "14px"}}>
         How a years-long domain name feud ended in a bloody shootout
        </Typography>
       </Grid>
      </Grid>
      <Grid item align='start'>
       <img
        height='354px'
        width='740px'
        src='https://miro.medium.com/max/945/1*jOvu1hK1XTrBswWU7hHcMg.jpeg'
       />
      </Grid>
     </Grid>
    </Container>

    <Container align='center'>
     <Grid>
      <Typography
       style={{
        backgroundColor: "yellow",
        maxWidth: "1080px",
        marginTop: "70px",
        fontSize: "40px"
       }}
      >
       ”There’s no need for Twitter to serve as a tool of political
       omnipresence.” — Robert Howell
      </Typography>
     </Grid>
    </Container>
    <Grid style={{display: "flex", flexGrow: 1}}>
     <Grid
      container
      spacing={1}
      justify='center'
      style={{
       display: "flex",
       width: "1080px",
       marginLeft: "200px",
       flexDirection: "column"
      }}
     >
      <Grid item align='center'>
       <img
        height='310px'
        width='700px'
        src='https://miro.medium.com/max/945/1*-8KL6r_tNZ9B2Lfz_9dc0Q.png'
       />
      </Grid>
      <Grid
       item
       xs={9}
       align='center'
       justify='center'
       style={{backgroundColor: "blue", color: "white", maxWidth: "400px"}}
      >
       <Typography
        textAlign='center'
        style={{fontSize: "18px", maxWidth: "400px"}}
       >
        A New Smart Contact Lens Charges Without Burning Your Eyes
       </Typography>
       <Typography textAlign='center' style={{fontSize: "14px"}}>
        The technology uses supercapacitors and will help speed the creation of
        contacts lenses that monitor the body
       </Typography>
      </Grid>
     </Grid>
    </Grid>
    <div align='center'>
     <Divider style={{marginBottom: "40px", maxWidth: "800px"}} />
    </div>
    <Container maxWidth='sm'>
     <Grid display='flex'>
      <img
       height='500px'
       src='https://miro.medium.com/max/945/1*udff9dYRAu0vc2yL7-AuQg.jpeg'
      />
     </Grid>
    </Container>

    <Container maxWidth='sm'>
     <h1>Keep Your Home Screen Organized</h1>
     <div>
      <p style={{align: "start", alignItems: "start", maxWidth: "500px"}}>
       Designer Hideaki Nakatani makes a variety of unconventional wallpapers
       that expand the capabilities of iOS. (Sorry, Android users.) The “Expand
       Bezel” options give you appealing app shelves to organize your home
       screen with; the “Hide Dock” wallpapers, well, hide the default shading
       behind your app dock, allowing colors and gradients to spill all the way
       to the bottom of your screen.
       <br />
       <br />
       Visit Nakatani’s “Mysterious iPhone Wallpaper” website to explore the
       options for yourself. And come back to OneZero for more tips like this
       every day.
      </p>
     </div>
    </Container>
    <div align='center'>
     <Divider style={{marginBottom: "40px", maxWidth: "800px"}} />
    </div>
    {/**Category footer/content */}
    <Container align='center' maxWidth='sm'>
     {this.state.art.map(item => (
      <Grid className={classes.cards}>
       <div align='start'>
        <Grid className={classes.content}>
         <Typography style={{fontSize: "15px", fontWeight: "bold"}}>
          {item.title}
         </Typography>
         <p>{item.id}</p>
         <p style={{color: "grey", fontSize: "13px"}}>
          {item.author.fullname} {item.name}
          <br />
          {item.createdAt}{" "}
         </p>
        </Grid>
       </div>
       <Container align='right' maxWidth='xs'>
        <CardMedia className={classes.cover} image={item.image} />
       </Container>
      </Grid>
     ))}
    </Container>

    <Divider style={{marginBottom: "40px"}} />
    <p align='right'> About OneZero · About Medium · Terms · Privacy</p>
   </div>
  );
 }
}

export default withStyles(styles)(Onezero);
