import React from "react";
import {PrimaryAppBar} from "../bookmark/MarkBar";
import {Grid, Container, Typography, Divider, Button} from "@material-ui/core";
import "./stats.css";

export default function Stats() {
 return (
  <div>
   <div>
    <PrimaryAppBar />
   </div>
   <Grid>
    <Container maxWidth='md'>
     <Typography variant='h4' fontWeight='bold'>
      Stats
     </Typography>
     <br />
     <div style={{flexDirection: "column", display: "flex"}}>
      <Grid style={{display: "flex"}}>
       <Typography className='text'>
        Click story below to view detailed stats
       </Typography>
       <div style={{margin: "0px 0px 0px auto"}}>
        <Typography>Learn more about using stats</Typography>
       </div>
      </Grid>
     </div>
     <Divider style={{marginTop: "10px"}} />

     <ul className='chartTabs' style={{display: "flex"}}>
      <li className='is-active' style={{marginRight: "20%"}}>
       <div className='charTab'>
        <div className='totalNumber'>2</div>
        <div>
         Views
         <span className='fontWeight u-xs-hide'>(30 days)</span>
        </div>
       </div>
      </li>
      <li className='is-active' style={{marginRight: "20%"}}>
       <div className='charTab'>
        <div className='totalNumber'>2</div>
        <div>
         "Reads "<span className='fontWeight u-xs-hide'>(30 days)</span>
        </div>
       </div>
      </li>
      <li className='is-active' style={{marginRight: "20%"}}>
       <div className='charTab'>
        <div className='totalNumber'>0</div>
        <div>
         "Fans "<span className='fontWeight u-xs-hide'> (30 days)</span>
        </div>
       </div>
      </li>
     </ul>

     <Grid style={{marginTop: "300px", color: "grey"}}>
      <Button style={{textTransform: "none"}}>Stories</Button>
      <Button style={{textTransform: "none"}}>Responses</Button>
      <Button style={{textTransform: "none"}}>Series</Button>
      <Divider />
      <div align='center'>
       <Typography>
        {" "}
        There are no published stories for which you can view stats.
       </Typography>
      </div>
     </Grid>
    </Container>
   </Grid>
  </div>
 );
}
