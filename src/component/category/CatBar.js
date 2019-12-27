import React from "react";
import {fade, makeStyles} from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Tooltip from "@material-ui/core/Tooltip";
import {Divider, Button} from "@material-ui/core";
import {BootstrapButton} from "../profile/CostButton";
import {Link} from "react-router-dom";
import "./catmark.css";

const useStyles = makeStyles(theme => ({
 grow: {
  flexGrow: 1
 },
 menuButton: {
  marginRight: theme.spacing(2)
 },
 title: {
  display: "none",
  [theme.breakpoints.up("sm")]: {
   display: "block"
  }
 },
 search: {
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: fade(theme.palette.common.white, 0.15),
  "&:hover": {
   backgroundColor: fade(theme.palette.common.white, 0.25)
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
   marginLeft: theme.spacing(3),
   width: "auto"
  }
 },
 searchIcon: {
  width: theme.spacing(7),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
 },
 inputRoot: {
  color: "inherit"
 },
 inputInput: {
  padding: theme.spacing(1, 1, 1, 7),
  transition: theme.transitions.create("width"),
  width: "100%",
  [theme.breakpoints.up("md")]: {
   width: 200
  }
 },
 sectionDesktop: {
  display: "none",
  [theme.breakpoints.up("md")]: {
   display: "flex"
  }
 },
 sectionMobile: {
  display: "flex",
  [theme.breakpoints.up("md")]: {
   display: "flex"
  }
 },

 fontStyle: {
  color: "grey",
  height: "40px",
  fontSize: "15px"
 },
 margin: {
  margin: theme.spacing(1)
 }
}));

export function CatAppBar() {
 const classes = useStyles();
 const [anchorEl, setAnchorEl] = React.useState(null);
 const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

 const isMenuOpen = Boolean(anchorEl);
 const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

 const handleProfileMenuOpen = event => {
  setAnchorEl(event.currentTarget);
 };

 const handleMobileMenuClose = () => {
  setMobileMoreAnchorEl(null);
 };

 const handleMenuClose = () => {
  setAnchorEl(null);
  handleMobileMenuClose();
 };

 const handleMobileMenuOpen = event => {
  setMobileMoreAnchorEl(event.currentTarget);
 };

 const menuId = "primary-search-account-menu";
 const renderMenu = (
  <Menu
   style={{margin: "20px"}}
   anchorEl={anchorEl}
   anchorOrigin={{vertical: "top", horizontal: "right"}}
   id={menuId}
   keepMounted
   transformOrigin={{vertical: "top", horizontal: "right"}}
   open={isMenuOpen}
   onClose={handleMenuClose}
  >
   <MenuItem style={{color: "grey", display: "flex"}}>
    <Avatar
     style={{marginRight: "15px"}}
     src='https://cdn-images-1.medium.com/fit/c/40/40/0*6Gn7deEsomANxfdu'
    ></Avatar>
    <Link
     to='profile'
     className={classes.fontStyle}
     style={{textDecoration: "none", color: "grey"}}
    >
     Rijal Abdullah
     <br />
     @rijallabdullah
    </Link>
   </MenuItem>
   <MenuItem className={classes.fontStyle}>Become a member</MenuItem>
   <Divider />
   <Link to='/new_story' style={{textDecoration: "none"}}>
    <MenuItem className={classes.fontStyle}>New story</MenuItem>
   </Link>
   <Link to='/stories' style={{textDecoration: "none"}}>
    <MenuItem className={classes.fontStyle}>Stories</MenuItem>
   </Link>
   <MenuItem className={classes.fontStyle}>Series</MenuItem>
   <Link to='/stats' style={{textDecoration: "none"}}>
    <MenuItem className={classes.fontStyle}>Stats</MenuItem>
   </Link>
   <Divider />
   <MenuItem className={classes.fontStyle}>Medium Partner Program</MenuItem>
   <Divider />
   <Link to='/bookmarks' style={{textDecoration: "none"}}>
    <MenuItem className={classes.fontStyle}>Bookmarks</MenuItem>
   </Link>
   <MenuItem className={classes.fontStyle}>Publications</MenuItem>
   <MenuItem className={classes.fontStyle}>Customize your interests</MenuItem>
   <Divider />
   <Link to='/profile' style={{textDecoration: "none"}}>
    <MenuItem className={classes.fontStyle}>Profile</MenuItem>
   </Link>
   <MenuItem className={classes.fontStyle}>Settings</MenuItem>
   <MenuItem className={classes.fontStyle}>Help</MenuItem>
   <MenuItem className={classes.fontStyle}>Sign out</MenuItem>
  </Menu>
 );

 return (
  <div>
   <Toolbar style={{backgroundColor: "white", color: "grey"}}>
    <IconButton
     className={classes.menuButton}
     color='inherit'
     aria-label='open drawer'
     href='/'
    >
     <img
      height='40px'
      src='https://cdn.icon-icons.com/icons2/1584/PNG/512/3721675-medium_108052.png'
     />
    </IconButton>
    <div className={classes.grow} />
    <IconButton aria-label='search' color='inherit'>
     <SearchIcon />
    </IconButton>
    <div className={classes.sectionMobile}></div>
    <div className={classes.sectionDesktop}>
     <Tooltip title='Notifications' enterDelay={500}>
      <IconButton aria-label='show 17 new notifications' color='inherit'>
       <Badge badgeContent={17} color='secondary'>
        <NotificationsIcon />
       </Badge>
      </IconButton>
     </Tooltip>
     <div>
      <BootstrapButton
       variant='contained'
       style={{
        borderColor: "grey",
        backgroundColor: "white",
        marginTop: "10px",
        marginLeft: "10px",
        color: "black"
       }}
      >
       Upgrade
      </BootstrapButton>
     </div>
     <IconButton
      edge='end'
      aria-label='account of current user'
      aria-controls={menuId}
      aria-haspopup='true'
      onClick={handleProfileMenuOpen}
      color='inherit'
     >
      <AccountCircle />
     </IconButton>
    </div>
   </Toolbar>
   {renderMenu}
  </div>
 );
}
