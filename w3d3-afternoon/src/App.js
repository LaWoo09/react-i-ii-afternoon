import React, { Component } from 'react';
import Header from "./components/Header";
import Button from "./components/Button";
import Card from "./components/Card"
import data from "./data.js"
import './App.css';

 class App extends Component {
   constructor() {
     super();
     this.state = {
      //  name: "",
      //  location: "",
      //  jobTitle: "",
      //  employer: "",
      //  favMovies: [],
       data: data,
       counter: 0
     }
     this.incrementIt = this.incrementIt.bind(this);
     this.decrementIt = this.decrementIt.bind(this);
   }

   incrementIt() {
    if(this.state.counter !== 25) {
      this.setState({
          counter: this.state.counter + 1
      })
    } else {
        return;
      }
   }

   decrementIt() {
    if(this.state.counter !== 0) {
      this.setState({
          counter: this.state.counter - 1
      })
    } else {
        return;
      }
   }


  render() {
   return (
    <div className="App">
      <Header/>
      <Card data={data} counter={this.state.counter}/>
      <Button increment={this.incrementIt} decrement={this.decrementIt}/>
    </div>
   )
  }
}

export default App;
