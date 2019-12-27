import React, { Component } from 'react';
import { useStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import InputWithIcon from './FormLogin';
import { Grid, withStyles } from '@material-ui/core';
import SignInModal from './LoginPage';


const styles = theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
      width: 900,
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

const things = <p textDeclaration="underline"> term service</p>;

class TransitionsModal extends Component {
  constructor(){
    super();
    this.state ={
      credentials:{email:'', password:''},
      setOpen: false,
      mode:'view'
    };
    this.onChange = this.onChange.bind(this);
    this.onSave=this.onSave.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  onChange(event){
    const field = event.target.name;
    const credentials = this.state.credentials;
    credentials[field] = event.target.value;
    return this.setState({credentials: credentials});
  }

  onSave(event){
    event.preventDefault();
    this.props.actions.logInUser(this.state.credentials);
  }

  handleEdit() {
    this.setState({mode: 'edit'});
  }
  
  handleOpen = () => {
    this.setState({
      setOpen: true
    });
  };

  handleClose = () => {
    this.setState({
      setOpen:false
    })
  };


  render(){
  const {classes} = this.props;

  if(this.state.mode === 'view'){
  return (
    <div>
      <Button color="inherit" onClick={()=> this.handleOpen()}>
          Login
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
          
        <Fade in={this.state.setOpen}>
          <div className={classes.paper}>
            <Grid container direction="row" justify="flex-start" alignItems="flex-start">
              <Grid item >
              <img alt="" src="/logo1.png" width="214" height="600" role="presentation"/>
              </Grid>
              
                <Grid item align="center" style={{marginLeft:29.1, marginInlineEnd:28.19}} >
                 <h2 id="transition-modal-title">Join Medium</h2>
                    <p style={{maxWidth:"414.5px", color:"grey"}} id="transition-modal-description">Create an account to receive great stories in your inbox, personalize your homepage, and follow authors and topics that you love.</p>
                
            
                    <InputWithIcon/>
                    

                    <p >Already have an account?<Button onClick={this.handleEdit}>Sign In</Button></p>

                    <p style={{fontSize:"2dp", maxWidth:"400px", color:"grey"}}>To make Medium work, we log user data and share it with service providers. Click “Sign Up” above to accept Medium’s <things/>Terms of Service & Privacy Policy.</p>
                </Grid>

                <Grid item >
                    <img alt="" src="/logoright.png" style={{width:214, height:"600"}}/>
                </Grid>
            </Grid>
         
          </div>
        </Fade>
      </Modal>
    </div>
  );
      }else{
        return(
          <SignInModal/>
        )
      }
}
}

export default withStyles(styles)(TransitionsModal);