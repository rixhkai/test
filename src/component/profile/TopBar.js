import React from "react";
import {fade, makeStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Tooltip from "@material-ui/core/Tooltip";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import {Divider, Button} from "@material-ui/core";
import {BootstrapButton} from "./CostButton";
import {Link} from "react-router-dom";

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

export function PrimaryAppBar() {
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
   <MenuItem onClick={handleMenuClose} style={{color: "grey", display: "flex"}}>
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

 const mobileMenuId = "primary-search-account-menu-mobile";
 const renderMobileMenu = (
  <Menu
   anchorEl={mobileMoreAnchorEl}
   anchorOrigin={{vertical: "top", horizontal: "right"}}
   id={mobileMenuId}
   keepMounted
   transformOrigin={{vertical: "top", horizontal: "right"}}
   open={isMobileMenuOpen}
   onClose={handleMobileMenuClose}
  >
   <MenuItem className={classes.fontStyle}>
    <p>Add to publication</p>
   </MenuItem>
   <MenuItem className={classes.fontStyle}>
    <p>Share Draft Link</p>
   </MenuItem>
   <MenuItem className={classes.fontStyle}>
    <p>Share To Twitter</p>
   </MenuItem>
   <MenuItem className={classes.fontStyle}>
    <p>Manage unlisted setting</p>
   </MenuItem>
   <MenuItem className={classes.fontStyle}>
    <p>Change featured image</p>
   </MenuItem>
   <MenuItem className={classes.fontStyle}>
    <p>Change display title/ subtitle</p>
   </MenuItem>
   <MenuItem className={classes.fontStyle}>
    <p>Change tags</p>
   </MenuItem>
   <MenuItem className={classes.fontStyle}>
    <p>See revision history</p>
   </MenuItem>
   <MenuItem className={classes.fontStyle}>
    <p>More setting</p>
   </MenuItem>
   <Divider />
   <MenuItem className={classes.fontStyle}>
    <p>Hints and keyboard shortcuts</p>
   </MenuItem>
   <MenuItem className={classes.fontStyle}>
    <p>More help</p>
   </MenuItem>
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
    <BootstrapButton
     variant='contained'
     style={{backgroundColor: "green", color: "white"}}
    >
     Publish
    </BootstrapButton>
    <div className={classes.sectionMobile}>
     <IconButton
      aria-label='show more'
      aria-controls={mobileMenuId}
      aria-haspopup='true'
      onClick={handleMobileMenuOpen}
      color='inherit'
     >
      <MoreHorizIcon />
     </IconButton>
    </div>
    <div className={classes.sectionDesktop}>
     <Tooltip title='Notifications' enterDelay={500}>
      <IconButton aria-label='show 17 new notifications' color='inherit'>
       <Badge badgeContent={17} color='secondary'>
        <NotificationsIcon />
       </Badge>
      </IconButton>
     </Tooltip>
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
   {renderMobileMenu}
   {renderMenu}
  </div>
 );
}
