import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.handleClick2 = this.handleClick1.bind(this);
  }

  handleClick1(){
    console.log('button 1 clicked');
    console.log(this);
  }
  
  handleClick3 = () =>{console.log('button 3 clicked'+this);console.log(this);}
  /*
    btn1= when first render , the function handleClick is called  and not assigned to onClick event
    ------------------------------------------------------------
    btn1 = in btn1 console.log(this) print the context from app
    btn2 = in btn2 console.log(this) print undefined, because handleClick1 not set bind in constructor
    btn3 = this context is for this App, because in the constructor set handleClick2 = this.handleClic1.bin(this)
    btn4 = this context this is set automatically in arrow fuctions, not neccesary set in constructor

    https://reactjs.org/docs/handling-events.html
  */
  render(){
    return (
      <React.Fragment>
        <button id="btn1" onClick={this.handleClick1()}>click1</button>
        <button id="btn2" onClick={this.handleClick1}>click2</button>
        <button id="btn3" onClick={this.handleClick2}>click3</button>
        <button id="btn4" onClick={this.handleClick3}>click4</button>
      </React.Fragment>
    )
  }
  
}
export default App;
