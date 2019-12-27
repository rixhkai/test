import React, { Component } from "react";
import { TextField, Button, InputAdornment, IconButton } from "@material-ui/core";
import VisibilityIcon from '@material-ui/icons/Visibility';

class PasswordShowHide extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hidden: true,
      password: ""
    };

    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.toggleShow = this.toggleShow.bind(this);
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  toggleShow() {
    this.setState({ hidden: !this.state.hidden });
  }

  componentDidMount() {
    if (this.props.password) {
      this.setState({ password: this.props.password });
    }
  }

  render() {
    return (
      <div>
        <TextField
        style={{width:"280px"}}
        label="password"
          type={this.state.hidden ? "password" : "text"}
          value={this.state.password}
          onChange={this.handlePasswordChange}
          InputProps={{
            endAdornment:(
              <InputAdornment position="end">
                <IconButton onClick={this.toggleShow}>
                  <VisibilityIcon/>
                </IconButton>
              </InputAdornment>
            )
          }}
        />
        
      </div>
    );
  }
}

export default PasswordShowHide;