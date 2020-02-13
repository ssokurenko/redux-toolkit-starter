import React from 'react'
import { useDispatch } from 'react-redux'
import { counterSlice } from '../store/slices/counter'

const CounterButtons = () => {
  const dispatch = useDispatch()
  const { increment, decrement } = counterSlice.actions

  const handlePlusClick = () => dispatch(increment())
  const handleMinusClick = () => dispatch(decrement())

  return (
    <div>
      <button className="lin-button is-secondary" onClick={handlePlusClick}>
        +
      </button>
      &nbsp;
      <button className="lin-button is-danger" onClick={handleMinusClick}>
        -
      </button>
    </div>
  )
}

export default CounterButtons
