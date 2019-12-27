import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import PasswordShowHide from '../PasswordField';
import IconButton from "@material-ui/core/IconButton";
import VisibilityIcon from '@material-ui/icons/Visibility';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as sessionActions from '../../_actions/sessionActions';
import { Button } from '@material-ui/core';

const styles = theme => ({
  margin: {
    margin: theme.spacing(1),
  },
});

class InputWithIcon extends Component {
  // constructor(props){
  //   super(props);
  //   this.state={
  //     hidden: true,
  //     email: '',
  //     password: ''
  //   };
  //   // this.onChange = this.onChange.bind(this);
  //   this.onSave=this.onSave.bind(this);
  //   this.toggleShow = this.toggleShow.bind(this);
  //   this.handleChangePassword = this.handleChangePassword.bind(this);
  //   // this.handleChangeEmail = this.handleChangeEmail.bind(this);
  // }

  // _onSave = () => {
  //   let credentials = {
  //     password: this.state.password
  //   }
  //   dispatch(login(credentials))
  // }

  // onChange(){
  //   let credentials ={
  //     email: this.state.credentials.email,
  //     password: this.state.credentials.password
  //   }
  //   // const field = event.target.name;
  //   // const credentials = this.state.credentials;
  //   // credentials[field] = event.target.value;
  //   return this.setState({credentials: credentials});
  // }

  state = {
    hidden: true,
    email: "",
    password: ""
  }

  onSave = event =>{
    event.preventDefault();
    // let credentials = {
    //   email: this.state.email,
    //   password: this.state.password
    // }
    this.props.actions.logInUser(this.state);
  }

  handleChangePassword = e => {
    this.setState({ [e.target.name]: e.target.value });
  }
  // handleChangeEmail(e){
  //   this.setState({ email: e.target.value });
  // }

  toggleShow = () => {
    this.setState({ hidden: !this.state.hidden });
  }

  render(){
  const {classes} = this.props;

  return (
    <div>
      {/* <div className={classes.margin}>
        <Grid align="center">

          <Grid item >
            <TextField style={{width:280}} inputProps={{style:{ textAlign:"center"}}} id="input-with-icon-grid" label="username"
            
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <InfoOutlinedIcon/>
                </InputAdornment> ),}} />
          </Grid>
        </Grid>
      </div> */}

      <div className={classes.margin}>
        <Grid align="center">

          <Grid item>
            <TextField style={{width:280}} 
                        inputProps={{style:{ textAlign:"center"}}} 
                        id="input-with-icon-grid" 
                        label="email"
                        name="email"
                        value={this.state.email}
                          onChange={this.handleChangePassword} 
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="start">
                              <InfoOutlinedIcon/>
                            </InputAdornment> ),}}/>
          </Grid>
        </Grid>
      </div>
      <div className={classes.margin}>
        <Grid align="center">

        <TextField
        style={{width:"280px"}}
        label="password"
        name="password"
          type={this.state.hidden ? "password" : "text"}
          value={this.state.password}
          onChange={this.handleChangePassword}
          InputProps={{
            endAdornment:(
              <InputAdornment position="end">
                <IconButton
                onClick={this.toggleShow}>
                  <VisibilityIcon/>
                </IconButton>
              </InputAdornment>
            )
          }}
        />
        </Grid>
      </div>

      <div className={classes.margin}>
        <Grid align="center">
        <Button onClick={this.onSave} style={{marginTop:"30px", color:"white", backgroundColor:"black" }} >Registration</Button>
        </Grid>
      </div>
      
    </div>
  );
}
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(withStyles(styles)(InputWithIcon));