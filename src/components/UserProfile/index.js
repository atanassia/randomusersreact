import React, { Component } from 'react'
import {Card, CardHeader} from 'material-ui/Card'

import './UserProfile.css'

class UserProfile extends Component {
  constructor(props){
    super(props);
    this.state = {
      people: [],
    }
  }
  componentDidMount(){
    let number = this.props.number
    fetch(`https://randomuser.me/api/?results=${number}`)
    .then(results => {
      return results.json();
    }).then(data => {
      let names = data.results.map((person) => {
        let title = person.name.title;
        let firstname = person.name.first;
        let lastname = person.name.last;
        let fullname = `${title} ${firstname} ${lastname}`
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

      })

    })

  }
  render(){
    return (
      <div id="card-holder">
    {this.state.people.map((obj,idx) => {
      return(
              <Card className="cards" key={idx}>
              <CardHeader title={obj.name} avatar={obj.picsrc} />
              </Card>
            )})}
    </div>

  )}
}

export default UserProfile
