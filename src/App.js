import React, {Component} from 'react';
import './App.css';
import ScrollableTabsButtonForce from './component/home/Tab';
import ImgMediaCard from './component/home/Content';
import { Home } from './component/home/home';


class App extends Component {
  constructor(){
    super()
    this.state = {
      modalSelector: ''
    }
  }
  render(){
  return (
    <div>
     
    <div >
    </div>
    <Home/>
    </div>
  );
  }
}

export default App;
