import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import './App.css';

import UserProfile from '../UserProfile'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      people: [],
    }
  }

  componentDidMount(){
    fetch('https://randomuser.me/api/?results=3')
    .then(results => {
      return results.json();
    }).then(data => {
      let names = data.results.map((person) => {
        let title = person.name.title;
        let firstname = person.name.first;
        let lastname = person.name.last;
        let fullname = `${title} ${firstname} ${lastname}`
        console.log(fullname);
        let userpic = person.picture.large
        this.setState((prevState)=> ({
          people: [
            ...prevState.people,
            {
              name: fullname,
              picsrc: userpic
            }
          ]
        }))
        console.log(this.state);

      })

    })

  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
        <UserProfile people={this.state.people}/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
