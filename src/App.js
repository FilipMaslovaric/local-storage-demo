import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    clicked: 0
  }

  handleClick = () => {

    const clicksTotal = ++this.state.clicked;

    console.log('Button clicked!');

    this.setState({
      clicked: clicksTotal
    })
    localStorage.setItem("clicked", clicksTotal)

  }

  render() {
    return (
      <div className="App">
        <button onClick={this.handleClick}>Button clicked {this.state.clicked} times</button>
      </div>
    );
  }

  componentDidMount = () => {
    // Load total clicks from local storage
    const totalClicks = parseInt(localStorage.getItem("clicked"), 10)

    // Update our state with the total clicks
    this.setState({
      clicked: totalClicks
    })
  }

}

export default App;
