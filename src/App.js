import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      monsters:[],
      searchField : ''
    }
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users    =>this.setState({monsters:users}))
  }
  //the arrow functions not needd be declared in constructor, because
  //automatically when is compiled or interpreted set this component as scope from arrow function
  //and we carefree for this: this.namefunction = this.namefunction.bin(this); 
  handleChange= e =>{
    this.setState({searchField:e.target.value})
  }

  render(){
    const {monsters,searchField} = this.state;
    const filteredMonsters = monsters.filter(monster=>
        monster.name.toLowerCase().includes(searchField.toLowerCase())
      );
    return (
      <div className="App">
        <SearchBox 
            placeholder='search monsters'
            handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}
export default App;
