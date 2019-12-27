import React, {Component} from "react";
import {withStyles, useTheme} from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import {Grid, Box, Link} from "@material-ui/core";
import "./content.css";
import {AlignItemsList} from "../middleCont";
import {SimpleList} from "./SideBar";
import {Button} from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import {LargeCard, MiddleCard, RightCard} from "./LargeCard";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import axios from "axios";
import Api from "../../utils/Api";
import { connect } from 'react-redux';
import {fecthArticles, AllArticles, PopArticles} from '../../_actions/articles';

const dataLeft = [
 {
  id: 1,
  img:
   "https://cdn-images-1.medium.com/fit/c/520/189/1*eHc3cNEAM9kro06WSPQG3w.jpeg",
  title: "2020 Programming Trend Predictions",
  desc: "Predicting what programming technologies will emerge in 2020",
  author: "Indrek Lasn",
  category: "in Better Programming",
  date: "Oct 8, 2018 • 9 min read",
  href: "/articledetail"
 }
];

const dataCenter = [
 {
  id: 1,
  img:
   "https://cdn-images-1.medium.com/fit/c/125/125/1*OF18Yw2PniRLIkBUao8EDA.png",
  title: "MVVM architecture, ViewModel and LiveData — Part 3 (AndroidX..",
  desc: "",
  author: "Hazem Saleh",
  category: "in ProAndroidDev",
  date: "Oct 8, 2018 • 9 min read"
 },
 {
  id: 2,
  img:
   "https://cdn-images-1.medium.com/focal/125/125/49/59/0*-vvuuXp-N6wIqLvP.jpg",
  title: "When a Robot Writes Your News, What Happens to Democracy?",
  desc: "",
  author: "CNN",
  category: "",
  date: "Feb 28, 2018 • 6 min read"
 },
 {
  id: 3,
  img: "https://cdn-images-1.medium.com/fit/c/125/125/0*UYOnTliperyu9oea",
  title: "2020 Programming Trend Predictions",
  desc: "From Bootcamp to Junior Developer Life",
  author: "Richard Thompson",
  category: "in BuildEmpire",
  date: "Oct 29, 2018 • 6 min read"
 }
];

const dataRight = [
 {
  id: 1,
  img:
   "https://cdn-images-1.medium.com/fit/c/630/278/1*h54BoyN7ZNeCIA0PmTttUw.jpeg",
  title: "Do These Things Before Going to Bed and You’ll Wake up...",
  desc: "Your day really starts the night before.",
  author: "Tim Denning",
  category: "",
  date: "Nov 27 • 5 min read"
 }
];

const sideData = [
 {
  id: "01",
  title:
   "Scientists Are Contemplating a 1,000-Year Space Mission to Save Humanity",
  author: "Corin Faife in OneZero",
  date: "Dec 5 • 13 min read "
 },
 {
  id: "02",
  title:
   "My Son Wore a Dress for Picture Day, and It Reaffirmed My Faith in Humanity",
  author: "Alex Richards in Apparently",
  date: "Nov 13 • 4 min read "
 },
 {
  id: "03",
  title:
   "Do These Things Before Going to Bed and You’ll Wake up Energized for Tomorrow",
  author: "Tim Denning in P.S. I Love You",
  date: "Nov 27 • 5 min read "
 },
 {
  id: "04",
  title: "The Absurd Story Behind China’s Biggest Bank Robbery",
  author: "David Gauvey Herbert in Marker",
  date: "Dec 4 • 28 min read"
 }
];

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
 card: {
  maxWidth: "1308px",
  margin: "12px auto 0 auto",
  fontFamily:
   "medium-content-sans-serif-font,-apple-system,BlinkMacSystemFont, Segoe UI ,Roboto,Oxygen,Ubuntu,Cantarell, Open Sans , Helvetica Neue ,sans-serif"
 },
 cards: {
  display: "flex"
 },
 details: {
  display: "flex",
  flexDirection: "column"
 },
 content: {
  flex: "1 0 auto",
  paddingLeft: theme.spacing(1)
 },
 cover: {
  width: 100,
  height: 100
 },
 controls: {
  display: "flex",
  alignItems: "center",
  paddingLeft: theme.spacing(1),
  paddingBottom: theme.spacing(1)
 },

 some: {
  display: "flex",
  alignItems: "center",
  paddingBottom: theme.spacing(1)
 },
 playIcon: {
  height: 38,
  width: 38
 },
 featuredFeed: {
  display: "flex",
  flexDirection: "row"
 },
 contentss: {
  display: "flex",
  flexDirection: "row",
  maxWidth: "1032px"
 }
});

// const Pop = () => {
//  axios
//   .get("http://localhost:5000/api/v1/posts")
//   .then(res => {
//    console.log("get POpUlAr");
//    this.setState({pop: res.data});
//   })
//   .catch(err => {
//    console.log(err);
//   });
// };

class ImgMediaCard extends Component {
//  constructor() {
//   super();
//   this.state = {
//    art: [],
//    pop: []
//   };
//  }
//  state=[];

 componentDidMount() {
  console.log("try to get articles");
  // Api.get("articles")
  //  .then(res => {
  //   const temp = res.data;
  //   console.log("success");
  //   console.log(temp);
  //   this.setState({art: temp});
  //  })
  //  .catch(err => {
  //   console.log(err);
  //  });
   this.props.dispatch(AllArticles());
   this.props.dispatch(PopArticles());

  // Api.get("posts")
  //  .then(res => {
  //   console.log("get POpUlAr");
  //   this.setState({pop: res.data});
  //  })
  //  .catch(err => {
  //   console.log(err);
  //  });
   
 }

 render() {
  const {classes} = this.props;

  return (
   <div align='center'>
    <div>
     <div className={classes.card}>
      <Grid container className={classes.featuredFeed} spacing={1}>
       {/**Large Container */}
       <Grid item xs={12} sm={6} md={4}>
        <div className='space'>
         {dataLeft.map(item => (
          <LargeCard
           href={item.href}
           id={item.id}
           img={item.img}
           title={item.title}
           desc={item.desc}
           author={item.author}
           category={item.category}
           date={item.date}
          />
         ))}
        </div>
       </Grid>

       {/**Small Container */}
       <Grid item xs={12} sm={6} md={4}>
        <Grid item xs={12}>
         {dataCenter.map(item => (
          <MiddleCard
           id={item.id}
           img={item.img}
           title={item.title}
           desc={item.desc}
           author={item.author}
           category={item.category}
           date={item.date}
          />
         ))}
        </Grid>
       </Grid>

       <Grid item xs={12} sm={8} md={4}>
        {dataRight.map(item => (
         <RightCard
          id={item.id}
          img={item.img}
          title={item.title}
          desc={item.desc}
          author={item.author}
          category={item.category}
          date={item.date}
         />
        ))}
       </Grid>
      </Grid>
      <div align='right' style={{maxWidth: "1032px"}}>
       <Button style={{color: "green", fontSize: "small"}}>
        {" "}
        SEE ALL FEATURED &nbsp;{" "}
        <ArrowForwardIosIcon style={{fontSize: "10px"}} />
       </Button>
      </div>
     </div>
     <div className='divider'></div> {/* divide content */}
    </div>

    <div>
     <Grid
      container
      spacing={0}
      style={{maxWidth: "1032px"}}
      className={classes.card}
     >
      <Grid
       item
       xs={12}
       md={7}
       style={{margin: "0px auto 0px 0px", width: "600px"}}
      >
       {this.props.articlesReducer.articles.map(item => (
        <AlignItemsList
        id={item.id}
         title={item.title}
         img={item.image}
         desc={item.content}
         author={item.author.fullname}
         date={item.createdAt}
        />
       ))}
      </Grid>
      <Grid item style={{margin: "0px 0px 0px auto", width: "400px"}}>
       <List component='nav' aria-label='main mailbox folders'>
        <Grid>
         <Typography
          align='left'
          variant='h6'
          style={{fontWeight: "bold", marginBottom: "10px"}}
         >
          Popular on Medium{" "}
         </Typography>
        </Grid>
        <Divider />
       </List>
       {this.props.articlesReducer.pop.map((item, index) => 
       (
        <SimpleList
         id={index+1}
         img={item.image}
         title={item.title}
         author={item.author.fullname}
         date={item.createdAt}
        />
       ))}

       <Divider style={{marginTop: "80px", marginBottom: "30px"}} />
       <Grid align='start' style={{maxWidth: "300px"}}>
        <Typography variant='body2' style={{color: "grey"}}>
         {" "}
         Help &nbsp; Status &nbsp; Writers &nbsp; Blog &nbsp; Careers <br />{" "}
         Privacy &nbsp; Terms &nbsp; About
        </Typography>
       </Grid>
      </Grid>
     </Grid>
    </div>
   </div>
  );
 }
}

const mapStateToProps = state => {
  return {
  //  datas: state.data
  // return {
    articlesReducer: state.ArticlesReducer
  // }
  };
}

export default connect(mapStateToProps)(withStyles(styles)(ImgMediaCard));
