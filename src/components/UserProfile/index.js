import React, { Component } from 'react'
import {Card, CardHeader, CardTitle, CardText} from 'material-ui/Card'

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
        let title = capitalise(person.name.title);
        let firstname = capitalise(person.name.first);
        let lastname = capitalise(person.name.last);
        let fullname = `${title} ${firstname} ${lastname}`;
        let userpic = person.picture.large;
        let email = person.email;
        let city = capitalise(person.location.city);
        this.setState((prevState)=> ({
          people: [
            ...prevState.people,
            {
              name: fullname,
              picsrc: userpic,
              email,
              city
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
              <CardTitle title={obj.city} subtitle={obj.email}/>
              </Card>
            )})}
    </div>

  )}
}

function capitalise(word){
  let caps = word.charAt(0).toUpperCase();
  let restofWord = word.substring(1);
  return `${caps}${restofWord}`
}

export default UserProfile
