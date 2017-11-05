import React, { Component } from 'react'
import {Card, CardHeader, CardMedia} from 'material-ui/Card'

class UserProfile extends Component {
  constructor(props){
    super(props);
  }
  render(){
  return (
  this.props.people.map((obj,idx) => {
    return <Card key={idx}>
            <CardHeader title={obj.name} avatar={obj.picsrc} />
            </Card>

  })

)}
}

export default UserProfile
