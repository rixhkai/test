import React from "react";
import {PrimaryAppBar} from "./MarkBar";
import {Container, Typography, IconButton, Button} from "@material-ui/core";
import {Grid} from "@material-ui/core";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import "./bookmark.css";

export default function Bookmarks() {
 return (
  <div align='center'>
   <div style={{maxWidth: "1300px"}}>
    <PrimaryAppBar />
   </div>
   <Container maxWidth='lg' style={{marginTop: "30px"}}>
    <Grid flexGrow='1' align='start'>
     <Typography variant='h4'>Bookmarks</Typography>
    </Grid>
    <div className='border' style={{display: "flex", flexDirection: "column"}}>
     <Grid style={{display: "flex"}}>
      <IconButton>
       <BookmarkIcon fontSize='large' />
      </IconButton>
      <div className='pathRight'></div>
      <Typography variant='h5' style={{margin: "10px 0px 0px 20px"}}>
       Offline reading is here.
      </Typography>
      <div style={{margin: "10px 10px 0px auto"}}>
       <Button align='right' style={{backgroundColor: "black", color: "white"}}>
        Upgrade
       </Button>
      </div>
     </Grid>
    </div>
   </Container>
  </div>
 );
}
