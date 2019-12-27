import React from 'react'
// import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import App from './App'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Home } from "./component/home/home";
import OneZero from "./component/category/OneZero";
import ArticleDetail from "./component/detail/ArticleDetail";
import Comment from "./component/detail/Comment";
import NewStory from "./component/profile/NewStory";
import Stories from "./component/profile/Story";
import Stats from "./component/profile/Stats";
import Bookmarks from "./component/bookmark/Bookmarks";
import ProfilPage from "./component/profile/ProfilePage";
import ArticlePerson from "./component/home/ArticlePerson";

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
    <Switch>
   <Route exact path='/' component={Home} />
   <Route path='/category/:id' component={OneZero} />
   <Route path='/articledetail/:id' component={ArticleDetail} />
   <Route path='/article/:id/comment' component={Comment} />
   <Route path='/new_story' component={NewStory} />
   <Route path='/stories' component={Stories} />
   <Route path='/stats' component={Stats} />
   <Route path='/bookmarks' component={Bookmarks} />
   <Route path='/profile' component={ProfilPage} />
   <Route path='/articleperson' component={ArticlePerson} />
  </Switch>
    </Router>
  </Provider>
)
export default Root