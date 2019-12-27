import React, { Component } from "react";
import {PrimaryAppBar} from "../bookmark/MarkBar";
import {
 Container,
 Typography,
 Grid,
 Button,
 TextField,
 IconButton
} from "@material-ui/core";
import "./comment.css";
import "../bookmark/bookmark.css";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import CommentIcon from "@material-ui/icons/Comment";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import { connect } from "react-redux";
import { CommentsArt } from "../../_actions/comment";

class Comment extends Component {
    componentDidMount(){
        console.log("get art detail");
        const {id} = this.props.match.params;
        this.props.dispatch(CommentsArt(id));
    }

    render(){
 return (
  <div>
   <div align='center'>
    <PrimaryAppBar />
   </div>
   <Container maxWidth='md' style={{marginTop: "30px"}}>
    <Grid style={{marginBottom: "30px"}}>
     <Typography variant='h5'>Showing responses for:</Typography>
    </Grid>
    <div
     className='border'
     style={{display: "flex", flexDirection: "column", padding: "10px"}}
    >
     <Grid style={{display: "flex"}}>
      <h1 className='text'>
       Guide to play dota 2 in new big patch UPDATE <br />
       <span className='some'>Gaben</span>
      </h1>
      <div style={{margin: "10px 10px 0px auto"}}>
       <img
        width='40px'
        src='https://icon-library.net/images/applause-icon/applause-icon-20.jpg'
       />
       <CommentIcon />
      </div>
     </Grid>
    </div>
   </Container>
   <Grid
    style={{
     backgroundColor: "#DCDCDC",
     marginTop: "30px",
     width: "1519px",
     height: "2372px"
    }}
   >
    <Container maxWidth='md' style={{padding: "30px"}}>
     <div style={{marginTop: "50px"}}>
      <TextField
       style={{fontSize: "30px"}}
       id='outlined-title-input'
       placeholder='Write a responses...'
       fullWidth='true'
       multiline
       variant='outlined'
      />
     </div>

     <div
      className='border'
      style={{
       display: "flex",
       marginTop: "30px",
       flexDirection: "column",
       padding: "10px"
      }}
     >
      <Grid style={{display: "flex"}}>
       <h1 className='text'>
        {this.props.commArt.comment.comment} <br />
        <br />
        <img
         width='40px'
         src='https://icon-library.net/images/applause-icon/applause-icon-20.jpg'
        />
       </h1>
       <div style={{margin: "10px 10px 0px auto"}}>
        <br />
        <BookmarkIcon align='right' style={{marginRight: "10px"}} />
        <IconButton></IconButton>
       </div>
      </Grid>
     </div>

     <div
      className='border'
      style={{
       display: "flex",
       marginTop: "30px",
       flexDirection: "column",
       padding: "10px"
      }}
     >
      <Grid style={{display: "flex"}}>
       <h1 className='text'>
        Can you change jungle item system?? <br />
        <br />
        <img
         width='40px'
         src='https://icon-library.net/images/applause-icon/applause-icon-20.jpg'
        />
       </h1>
       <div style={{margin: "10px 10px 0px auto"}}>
        <br />
        <BookmarkIcon align='right' style={{marginRight: "10px"}} />
        <IconButton></IconButton>
       </div>
      </Grid>
     </div>
    </Container>
   </Grid>
  </div>
 );
}
}

const mapStateToProps = state => {
    return {
      commArt: state.commentReducers
    };
  }

export default connect(mapStateToProps)(Comment);