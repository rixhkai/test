import React from "react";

import {PrimaryAppBar} from "../bookmark/MarkBar";
import {
 Typography,
 Button,
 Container,
 Grid,
 Avatar,
 Box
} from "@material-ui/core";
import ComplexGrid from "./Contain";

export default function ProfilPage() {
 return (
  <div align='center'>
   <div style={{maxWidth: "1300px"}}>
    <PrimaryAppBar />
   </div>
   <div style={{marginTop: "30px"}}>
    <Container style={{maxWidth: "700px"}}>
     {/* <Box>
      <Grid container direction='row' spacing={2}>
       <Grid xs={12} style={{display: "flex"}}>
        <Typography variant='h5' style={{fontWeight: "bold"}}>
         GABEN
        </Typography>
        <Button variant='outlined' size='small' style={{marginLeft: "30px"}}>
         Edit Profile
        </Button>
       </Grid>

       <Grid xs={12}>
        <Typography variant='body2' style={{color: "grey"}}>
         1 following
        </Typography>
       </Grid>
       <Grid item style={{margin: "0px 0px 0px auto"}}>
        <Avatar style={{width: "150px", height: "150px"}} />
       </Grid>
      </Grid>
     </Box> */}
     <div align='start'>
      <ComplexGrid />
     </div>
     <div align='start'>
      <Grid>
       <Typography style={{color: "grey", marginTop: "30px"}}>
        Ember Spirit hasn't been active on medium yet. Check back later to see
        their stories, claps, and higlight
       </Typography>
      </Grid>
     </div>
    </Container>
   </div>
  </div>
 );
}
