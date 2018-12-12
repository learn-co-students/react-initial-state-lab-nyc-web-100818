// your Bomb code here!
import { Component } from 'react';

export default class Bomb extends Component {
  constructor(props){
    super(props)
    this.state = {
      secondsLeft: props.initialCount
    }
  }

  render(){
    return (this.state.secondsLeft ? `${this.state.secondsLeft} seconds left before I go boom!`
    :'Boom!')
  }
}
