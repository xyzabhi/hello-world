import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:"Hello"
      }
    }
    clickHandler=()=>{
        this.setState(
            {
                message:"Good Bye"
            }
        )
        console.log(this)
    }
  render() {
    return (
      <div>
          <h1>{this.state.message}</h1>
          <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default EventBind