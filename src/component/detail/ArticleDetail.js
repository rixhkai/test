import React, { Component } from "react";
import {
 Toolbar,
 Typography,
 AppBar,
 Divider,
 Container,
 Grid,
 Avatar,
 Button,
 CardMedia
} from "@material-ui/core";
import {fade, withStyles} from "@material-ui/core/styles";
import {PrimaryAppBar} from "../bookmark/MarkBar";
import IconButton from "@material-ui/core/IconButton";
import "./comment.css";
import {Link} from "react-router-dom";
import { ArticlesDetail } from "../../_actions/articles";
import { connect } from "react-redux";

const styles = theme => ({
 grow: {
  flexGrow: 1
 },

 acount: {
  marginTop: "20px",
  display: "flex"
 },

 image: {
  marginTop: "30px",
  marginRight: "30px",
  display: "flex",
  width: "300px",
  height: "200px"
 },

 text: {
  marginTop: "30px",
  marginRight: "30px"
 }
});

class ArticleDetail extends Component {
    componentDidMount(){
        console.log("get art detail");
        const {id} = this.props.match.params;
        this.props.dispatch(ArticlesDetail(id));
    }

    render(){
 const {classes} = this.props;
 return (
  <div>
   <div style={{align: "center"}}>
    <Container maxWidth='lg'>
     <PrimaryAppBar />
     <Divider />

     <Toolbar style={{backgroundColor: "white", color: "grey"}}>
      <IconButton
       className={classes.menuButton}
       color='inherit'
       aria-label='open drawer'
       href='/'
      >
       <img
        height='40px'
        src='https://miro.medium.com/max/432/1*IPEsgX_bZKP_7OubdnI7-Q.png'
       />
      </IconButton>
      <Typography style={{paddingLeft: "50px"}} floxGrow='1' align='start'>
       MISSION ORIGINALS{" "}
       <span style={{minWidth: "1px", height: "20px"}}>&nbsp;|</span>{" "}
       &nbsp;SUBSCRIBE
      </Typography>
     </Toolbar>
    </Container>
   </div>
   <div align='center' style={{marginTop: "30px"}}>
    <Container maxWidth='small'>
     <img
      width='1080px'
      height='800px'
      src={this.props.articlesDe.detail.image}
     />
    </Container>
   </div>

   <Container maxWidth='md' style={{marginTop: "50px"}}>
    <div align='center'>
     <Grid style={{maxWidth: "680px"}}>
      <div align='start' style={{ textAlign:"start" }} >
       <Typography variant='h5'>
           { console.log("gettt"+ this.props.articlesDe.detail) }
        {this.props.articlesDe.detail.title}
       </Typography>

       <Grid display='flex' className={classes.acount}>
        <Avatar src='https://miro.medium.com/fit/c/160/160/0*oxw8NBp_Td0n3l4_.png' />
        <Typography style={{marginLeft: "20px"}}>
         Gaben{" "}
         <Button
          size='small'
          variant='outlined'
          color='primary'
          href='#outlined-buttons'
         >
          Follow
         </Button>
         <br />
         Jun 26, 2018 · 10 min read
        </Typography>
       </Grid>

       <Typography>
        {" "}
        <br />
        {this.props.articlesDe.detail.content}
        <br />
        <br />
        <br />
        This originally appeared on Thought Catalog.
        <br />
        <br />
       </Typography>

       <Divider />
       <Link to='/articleperson' style={{textDecoration: "none"}}>
        <Grid display='flex' className={classes.acount}>
         <Avatar src='https://miro.medium.com/fit/c/160/160/0*oxw8NBp_Td0n3l4_.png' />
         <Typography
          variant='subtitle1'
          style={{marginLeft: "20px", fontWeight: "bold", color: "black"}}
         >
          Gaben <br />
          <span className='space'>
           Bestselling author of ‘Conspiracy,’ ‘Ego is the Enemy’ & ‘The
           Obstacle Is The Way’ http://amzn.to/24qKRWR
          </span>
         </Typography>
         <div style={{margin: "0px 0px 0px auto"}}>
          <Button
           align='right'
           size='small'
           variant='outlined'
           color='primary'
           href='#outlined-buttons'
          >
           Follow
          </Button>
         </div>
        </Grid>
       </Link>
       <br />
       <br />
       <Grid display='flex' className={classes.acount}>
        <Avatar src='https://miro.medium.com/fit/c/160/160/1*kFWwYehzjJIhgw8hTygfHw.png' />
        <Typography
         variant='subtitle1'
         style={{marginLeft: "20px", fontWeight: "bold"}}
        >
         Mission.org <br />
         <span className='space'>
          A network of business & tech podcasts designed to accelerate learning.
          Selected as “Best of 2018” by Apple. Mission.org
         </span>
        </Typography>
        <div style={{margin: "0px 0px 0px auto"}}>
         <Button
          size='small'
          variant='outlined'
          color='primary'
          href='#outlined-buttons'
         >
          Follow
         </Button>
        </div>
       </Grid>
       <br />
       <br />

       <Divider />
       <br />
       <br />
       <div align='center'>
        <Button
         size='large'
         align='center'
         fullWidth='true'
         variant='outlined'
         color='primary'
         href={`/article/${this.props.articlesDe.detail.id}/comment`}
        >
         See Responses (218)
        </Button>
        <br /> <br />
        <br />{" "}
       </div>
      </div>
     </Grid>
    </div>
   </Container>

   {/**Recomendation article */}
   <Grid align='start' style={{backgroundColor: "#F2F0F5"}}>
    <Container maxWidth='lg'>
     <br />
     <br />
     <Grid align='start' style={{margin: "0px 20px 0px auto"}}>
      <Typography variant='h6' fontWight='bold'>
       More from Medium
      </Typography>
      <br />
      <Divider />
     </Grid>
     <Container maxWidth='md' style={{display: "flex"}}>
      <Grid item style={{margin: "0px auto 0px auto"}}>
       <img
        className={classes.image}
        src='https://miro.medium.com/max/410/1*cWrckQhDDGxKiwpb6YtPtg.jpeg'
       />
       <Typography>Gaben change whole dota gameplay</Typography>
       <Grid display='flex' className={classes.acount}>
        <Avatar src='https://miro.medium.com/fit/c/160/160/0*oxw8NBp_Td0n3l4_.png' />
        <Typography style={{marginLeft: "20px"}}>
         Gaben <br />
         Jun 26, 2018 · 10 min read
        </Typography>
       </Grid>{" "}
       <br />
       <br />
      </Grid>

      <Grid item>
       <img
        className={classes.image}
        src='https://miro.medium.com/max/410/1*cWrckQhDDGxKiwpb6YtPtg.jpeg'
       />
       <Typography>Gaben change whole dota gameplay</Typography>
       <Grid display='flex' className={classes.acount}>
        <Avatar src='https://miro.medium.com/fit/c/160/160/0*oxw8NBp_Td0n3l4_.png' />
        <Typography style={{marginLeft: "20px"}}>
         Gaben{" "}
         <Button
          size='small'
          variant='outlined'
          color='primary'
          href='#outlined-buttons'
         >
          Follow
         </Button>
         <br />
         Jun 26, 2018 · 10 min read
        </Typography>
       </Grid>{" "}
       <br />
       <br />
      </Grid>

      <Grid item>
       <img
        className={classes.image}
        src='https://miro.medium.com/max/410/1*cWrckQhDDGxKiwpb6YtPtg.jpeg'
       />
       <Typography>Gaben change whole dota gameplay</Typography>
       <Grid display='flex' className={classes.acount}>
        <Avatar src='https://miro.medium.com/fit/c/160/160/0*oxw8NBp_Td0n3l4_.png' />
        <Typography style={{marginLeft: "20px"}}>
         Gaben{" "}
         <Button
          size='small'
          variant='outlined'
          color='primary'
          href='#outlined-buttons'
         >
          Follow
         </Button>
         <br />
         Jun 26, 2018 · 10 min read
        </Typography>
       </Grid>{" "}
       <br />
       <br />
      </Grid>
     </Container>
    </Container>
   </Grid>

   {/**footer */}
   <Grid align='start' style={{backgroundColor: "black"}}>
    <Container>
     <Container maxWidth='lg' style={{display: "flex"}}>
      <Grid
       item
       style={{
        margin: "0px auto 0px auto",
        marginRight: "30px",
        maxWidth: "400px"
       }}
      >
       <Typography className={classes.text} style={{color: "white"}}>
        Discover valve corporate
       </Typography>
       <Typography variant='body2' style={{color: "grey"}}>
        Dota gameplay has massive change in late 2019... where's the whole
        gameplay change.. there's outpost and new item on jungle
       </Typography>
       <br />
       <br />
      </Grid>

      <Grid
       item
       style={{
        margin: "0px auto 0px auto",
        marginRight: "30px",
        maxWidth: "400px"
       }}
      >
       <Typography className={classes.text} style={{color: "white"}}>
        Discover valve corporate
       </Typography>
       <Typography variant='body2' style={{color: "grey"}}>
        Dota gameplay has massive change in late 2019... where's the whole
        gameplay change.. there's outpost and new item on jungle
       </Typography>
       <br />
       <br />
      </Grid>

      <Grid
       item
       style={{
        margin: "0px auto 0px auto",
        marginRight: "30px",
        maxWidth: "400px"
       }}
      >
       <Typography className={classes.text} style={{color: "white"}}>
        Discover valve corporate
       </Typography>
       <Typography variant='body2' style={{color: "grey"}}>
        Dota gameplay has massive change in late 2019... where's the whole
        gameplay change.. there's outpost and new item on jungle
       </Typography>
       <br />
       <br />
      </Grid>
     </Container>
     <Divider
      variant='fullwidth'
      style={{width: "100%", backgroundColor: "white"}}
     />
     <br />
     <Grid style={{color: "white"}}>
      <Typography variant='h5' fontWight='bold'>
       {" "}
       Medium
      </Typography>

      <Typography style={{color: "grey"}} variant='h6' align='right'>
       About &nbsp; &nbsp; &nbsp; Help &nbsp; &nbsp; &nbsp; Legal
      </Typography>
     </Grid>
     <br />
    </Container>
   </Grid>
  </div>
 );
}
}

const mapStateToProps = state => {
    return {
      articlesDe: state.ArticlesReducer
    };
  }

export default connect(mapStateToProps)(withStyles(styles)(ArticleDetail));