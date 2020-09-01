import React, { Component } from 'react';
import UserInput from './components/ejercicio1/UserInput';
import UserOutput from './components/ejercicio1/UserOutput';
import './Ejercicio1.css';

class Ejercicio1 extends Component {
  state = {
    users: [
      {name: 'lucas'},
      {name: 'magda'},
      {name: 'daniel'},
      {name: 'gustavo'}
    ]
  }

  clickHandler = () => {
    this.setState({
      users: [
        {name: 'lucas'},
        {name: 'magda'},
        {name: 'daniel'},
        {name: 'gustavo'}
      ] 
    })
  }

  eventHandler = (e) => {
    this.setState({
      users: [
        {name: e.target.value},
        {name: 'magda'},
        {name: 'daniel'},
        {name: 'gustavo'}
      ]
    })
    console.log('it\'s working');
  }
  
  render(){
    const style = {
      backgroundColor: 'skyblue',
      fontFamily: 'sans-serif',
      textAling: 'center',
      border: '1px solid green',
      boxShadow: '0 2px 2px black',
      padding: '10px',
      margin: '10px'
    }
    return (
      <div className="Ejercicio1">
        <h1>React - Ejercicio N°1</h1>
        <button style={style} onClick={() => this.clickHandler()}>Click</button>
        <UserInput style={style} change={this.eventHandler} name={this.state.users[0].name}/>
        <UserOutput userName={this.state.users[0].name}/>
        <UserOutput userName={this.state.users[1].name}/>
        <UserOutput userName={this.state.users[2].name}/>
        <UserOutput userName={this.state.users[3].name}/>
      </div>
    );
  }
}

export default Ejercicio1;
