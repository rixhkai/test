import React from "react";
import Grid from "@material-ui/core/Grid";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";

const useStyles = makeStyles(theme => ({
 largeCardPost: {
  display: "block",
  marginLeft: "80px",
  "& h1": {
   lineHeight: "20pt",
   fontSize: "15pt",
   variant: ""
  },
  "& p": {
   lineHeight: "15pt",
   fontSize: "10pt",
   color: "grey"
  }
 },
 rightCardPost: {
  display: "block",
  maxWidth: "300px",
  marginLeft: "0px",
  "& h1": {
   lineHeight: "20pt",
   fontSize: "15pt",
   variant: ""
  },
  "& p": {
   lineHeight: "15pt",
   fontSize: "10pt",
   color: "grey"
  }
 },

 imageLargeCard: {
  flex: "0 1 auto",
  position: "relative",
  height: "150px",
  width: "100%",
  marginBottom: "16px",
  backgroundOrigin: "border-box!important",
  backgroundSize: "cover!important",
  display: "block!important"
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
}));
export const LargeCard = props => {
 const classes = useStyles();
 return (
  <CardActionArea>
   <Link to={props.href} style={{textDecoration: "none"}}>
    <CardMedia className={classes.imageLargeCard} image={props.img} />
    <div align='start'>
     <Grid className={classes.largeCardPost}>
      <Grid>
       <h1>{props.title}</h1>
       <p>{props.subtitle}</p>
      </Grid>
      <Grid>
       <p>
        {props.author} {props.category}
        <br />
        {props.date}
       </p>
      </Grid>
     </Grid>
    </div>
   </Link>
  </CardActionArea>
 );
};

export const MiddleCard = props => {
 const classes = useStyles();
 return (
  <Grid className={classes.cards}>
   <CardMedia className={classes.cover} image={props.img} />
   <div>
    <div align='start' alignItems='flex-start'>
     <Grid className={classes.content}>
      <Typography style={{fontSize: "15px", fontWeight: "bold"}}>
       {props.title}
      </Typography>
      <p>{props.subtitle}</p>
      <p style={{color: "grey", fontSize: "13px"}}>
       {props.author} {props.category}
       <br />
       {props.date}{" "}
      </p>
     </Grid>
    </div>
   </div>
  </Grid>
 );
};

export const RightCard = props => {
 const classes = useStyles();
 return (
  <CardActionArea>
   <CardMedia className={classes.imageLargeCard} image={props.img} />
   <div align='start'>
    <Grid className={classes.rightCardPost}>
     <Grid>
      <h1>{props.title}</h1>
      <p>{props.subtitle}</p>
     </Grid>
     <Grid>
      <p>
       {props.author} {props.category}
       <br />
       {props.date}
      </p>
     </Grid>
    </Grid>
   </div>
  </CardActionArea>
 );
};
{
 /**
<CardActionArea>
                    <CardMedia
                    height="150"
                    image="https://cdn-images-1.medium.com/fit/c/630/278/1*h54BoyN7ZNeCIA0PmTttUw.jpeg"
                    />
                   <div align="start"> 
                    <Grid>
                    <Typography gutterBottom variant="h7" component="h2" style={{maxWidth:"300px"}}>
                    Do These Things Before Going to Bed and You’ll Wake up... 
                    </Typography>
                    <div className="marginTop12">
                            <Typography variant="body2" color="textSecondary" component="p">
                            Your day really starts the night before.</Typography>
                                <div content= "\00B7" className={classes.some}>
                        <Typography variant="subtitle2" style={{color:"grey"}}>Nov 27 • 5 min read &nbsp; </Typography> <StarRateIcon style={{color:"grey"}}/>
                        </div>
                    </div>
                    </Grid>
                    </div>
                </CardActionArea> */
}
