import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import './App.css';

import UserProfile from '../UserProfile'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      num: '',
      profile: false
    }
    this.onNumberChange = this.onNumberChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onNumberChange(e){
    e.preventDefault();
    this.setState({
      num: e.target.value,
      profile: false
    })
  }

  onFormSubmit(e){
    e.preventDefault();
    this.setState({
      profile: true
    })
  }

  render() {
    let profile = this.state.profile
    if(!profile) {
    return (
      <MuiThemeProvider>
        <div className="App">
        <h1>Random User Generator</h1>
        <h3>How many users would you like?</h3>
          <form onSubmit={this.onFormSubmit}>
            <input type="number" value={this.state.num} onChange={this.onNumberChange}/>
            <button>Submit</button>
          </form>
        </div>
      </MuiThemeProvider>
    )
  } else {
      return (
        <MuiThemeProvider>
          <div className="App">
          <h1>Random User Generator</h1>
          <h3>How many users would you like?</h3>
            <form onSubmit={this.onFormSubmit}>
              <input type="number" value={this.state.num} onChange={this.onNumberChange}/>
              <button>Submit</button>
            </form>
            <UserProfile number={this.state.num}/>
          </div>
        </MuiThemeProvider>
      )
    };
  }
}

export default App;
