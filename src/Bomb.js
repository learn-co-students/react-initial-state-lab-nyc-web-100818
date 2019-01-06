// your Bomb code here!
import React from 'react'

export default class Bomb extends React.Component{
  constructor(props){
    super(props)
      this.state = {
        secondsLeft: this.props.initialCount
      }
    }//constructor

  render() {
    console.log(this.props.initialCount)
      const message = this.state.secondsLeft === 0? 'boom!': `${this.state.secondsLeft} seconds left before I go boom!`

      return (
        <div>{message}</div>
    )
  }




}//end of class
