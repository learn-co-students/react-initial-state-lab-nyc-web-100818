import React, { Component } from 'react'

export default class Bomb extends Component {

    constructor(props) {
        super(props)
        this.state = {
            secondsLeft: this.props.initialCount
        }
    }

    render() {
        return this.state.secondsLeft === 0 ? 
        <h1>Boom!</h1> : <div>{this.state.secondsLeft} seconds left before I go boom!</div>
    }

}
