import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Counter extends Component {
  constructor(props) {
     super(props);
  }
  render(){
    const {value,onIncrement,onDecrement} = this.props
    return(
      <p>
        Click:{value}times
        {''}
        <button onClick = {onIncrement}> + </button>
        {''}
        <button onClick = {onDecrement}> - </button>
      </p>
    )
  }

 Counter.PropTypes = {
   value: PropTypes.number.isRequired,
   onIncrement: PropTypes.func.isRequired,
   onDecrement: PropTypes.func.isRequired
 }
}
export default Counter
