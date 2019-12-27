import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import { Grid, InputAdornment } from '@material-ui/core';
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import TextField from '@material-ui/core/TextField';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import PasswordShowHide from '../PasswordField';



const styles = theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
      
      height: 550,
    backgroundColor: theme.palette.background.paper,
    borderRadius: 4,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(0, 0, 3),
    
  },
  margin: {
      marginTop:30,
  }
});

class SignInModal extends Component {
  constructor(){
    super();
    this.state={
      setOpen:false
    };
  }

  handleOpen = () => {
    this.setState({
      setOpen:true
    });
  };

  handleClose = () => {
    this.setState({
      setOpen: false
    });
  };

  render(){
  const {classes} = this.props;

  

  return (
    <div>
      <Button color="green" onClick={()=> this.handleOpen()}>
          SIGN IN
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={this.state.setOpen}
        onClose={()=> this.handleClose()}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
          
        <Fade in={this.state.setOpen} >
          <div className={classes.paper}>
            <Grid container direction="row" justify="space-around" alignItems="flex-start" spacing={0} margin="50">
              <Grid item >
              <img alt="" src="/logo1.png" width="214" height="550" role="presentation"/>
              </Grid>
              
                <Grid item align="center" style={{marginInlineEnd:28.19}} >
                 <h2 id="transition-modal-title">Sign in with email</h2>
                    <p style={{maxWidth:"27vw", color:"grey"}} id="transition-modal-description">Enter the email address associated with your account, and we'll send a magic link to your inbox.</p>
                <Grid align="center" style={{marginTop:"40px"}}>
                   <Grid item >
                    <TextField style={{width:280, marginLeft:24}} inputProps={{style:{ textAlign:"center"}}} id="input-with-icon-grid" label="email" InputProps={{endAdornment:(<InputAdornment><InfoOutlinedIcon/></InputAdornment>)}}/>
                  </Grid>

                  <PasswordShowHide/>
                </Grid>
                    
                    <Button style={{marginTop:"100px", color:"white", backgroundColor:"black" }} >Continue</Button>

                    <p><Button style={{color:"green", marginTop:"10px"}} onClick={()=>this.handleClose()} ><ArrowBackIosOutlinedIcon/>All sign in option</Button></p>

                </Grid>

                <Grid item >
                    <img alt="" src="/logoright.png" width="214" height="550"/>
                </Grid>
            </Grid>
         
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
}

export default withStyles(styles)(SignInModal);