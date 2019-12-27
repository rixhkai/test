import React from "react";
import {PrimaryAppBar} from "../bookmark/MarkBar";
import {Container, Typography, Button, Grid, Divider} from "@material-ui/core";

export default function Stories() {
 return (
  <div align='center'>
   <div style={{maxWidth: "1300px"}}>
    <PrimaryAppBar />
   </div>
   <Container maxWidth='lg' style={{marginTop: "60px"}}>
    <Grid style={{display: "flex"}}>
     <Typography variant='h3'>Your Stories</Typography>
     <div align='right' style={{margin: "0px 0px 0px 600px"}}>
      <Button
       variant='outlined'
       size='medium'
       style={{
        backgroundColor: "white",
        textTransform: "none",
        margin: "0px 0px 0px auto"
       }}
      >
       Import a story
      </Button>{" "}
     </div>
     <div style={{marginLeft: "5px"}}>
      <Button
       variant='outlined'
       size='medium'
       style={{
        backgroundColor: "white",
        borderColor: "green",
        color: "green",
        textTransform: "none",
        margin: "0px 0px 0px 3px"
       }}
      >
       Import a story
      </Button>
     </div>
    </Grid>

    <Grid style={{display: "flex", marginTop: "50px"}}>
     <Button style={{color: "grey", textTransform: "none"}}>Drafts 1</Button>{" "}
     &nbsp;
     <Button style={{color: "grey", textTransform: "none"}}>Published</Button>
    </Grid>

    <Divider />

    <Container maxWidth='xs' style={{marginTop: "80px"}}>
     <Grid align='center'>
      <Typography>
       You have no drafts
       <br />
       <br />
       Write on the go with our iOS and Android apps!
      </Typography>
     </Grid>
    </Container>
   </Container>
  </div>
 );
}
