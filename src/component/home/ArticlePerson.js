import React, {Component} from "react";
import {withStyles} from "@material-ui/core/styles";
import {PrimaryAppBar} from "../bookmark/MarkBar";
import {
 Grid,
 Container,
 Button,
 Typography,
 Avatar,
 Divider
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import RecipeReviewCard from "./ContentPerson";

const styles = theme => ({
 root: {
  flexGrow: 1
 },
 flex: {
  display: "flex"
 },
 text: {
  color: "green"
 }
});

class ArticlePerson extends Component {
 render() {
  const {classes} = this.props;
  return (
   <div>
    <div>
     <PrimaryAppBar />
    </div>
    <div className={classes.root} align='center' style={{marginTop: "20px"}}>
     <Grid style={{maxWidth: "680px"}}>
      <Container maxWidth='md'>
       <Grid container spacing={3} style={{maxWidth: "900px"}}>
        <Grid item xs={10}>
         <Grid style={{align: "start"}} className={classes.flex}>
          <Typography variant='h6' style={{fontWeight: "bold"}}>
           Gaben Spirit
          </Typography>
          <div align='right' style={{margin: "0px 0px 0px 10px"}}>
           <Button variant='outlined' size='small' style={{color: "green"}}>
            follow
           </Button>
          </div>
          <ExpandMoreIcon />
         </Grid>
         <Grid>
          <div align='start'>
           <Typography
            variant='body1'
            style={{color: "grey", maxWidth: "600px"}}
           >
            Best bussiness man in this world who own valve corporation and the
            one behind dota 2.. that recently change whole gameplay system
           </Typography>
           <Typography variant='body2' style={{color: "grey"}}>
            <br />2 Following &nbsp; 2788k Followers
           </Typography>
          </div>
         </Grid>
        </Grid>
        <Grid item xs style={{align: "right"}}>
         <Avatar style={{width: "80px", height: "80px"}} />
        </Grid>
       </Grid>
      </Container>
     </Grid>
    </div>
    <br />
    <div align='center'>
     <Grid style={{maxWidth: "680px"}}>
      <Container maxWidth='md'>
       <div align='start'>
        <Button style={{textTransform: "none"}}>Profile</Button>
        <Button style={{textTransform: "none"}}>Claps</Button>
        <Button style={{textTransform: "none"}}>Highlights</Button>
        <Button style={{textTransform: "none"}}>Responses</Button>
       </div>
       <Divider />
       <div align='start' style={{marginTop: "30px"}}>
        <Typography variant='h6' style={{fontWeight: "bold"}}>
         Featured
        </Typography>
       </div>
       <div align='start'>
        <RecipeReviewCard />
       </div>
      </Container>
     </Grid>
    </div>
   </div>
  );
 }
}

export default withStyles(styles)(ArticlePerson);
