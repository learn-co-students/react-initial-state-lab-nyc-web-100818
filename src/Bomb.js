// your Bomb code here!
import React from 'react';

export default class Bomb extends React.Component {
  constructor(props){
    super(props)
    this.state = {secondsLeft: props.initialCount}
  }


  render(){
    let seconds;

      if (this.state.secondsLeft > 0){
        seconds = this.state.secondsLeft + " seconds left before I go boom!"
      } else {
        seconds = "Boom!"
      }
    return(<div>{seconds}</div>)
  }
}
