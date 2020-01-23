import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
    state = {
        persons: [
            {name:'Max', age:25},
            {name:'Mohan', age:22},
            {name:'Mohit', age:34}
        ]
    }

    switchNameHandler

  render() {
    return (
      <div className="App">
        <h1>Hi I'm React!!!</h1>
          <button onClick={}>Switch Person</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null,'Hi I\'m React!'));
  }
}

export default App;
