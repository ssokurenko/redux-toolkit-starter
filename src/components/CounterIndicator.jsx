import React from 'react'
import { useSelector } from 'react-redux'

const CounterIndicator = () => {
  const value = useSelector(state => state.counter.value)

  return <div>{value}</div>
}

export default CounterIndicator
