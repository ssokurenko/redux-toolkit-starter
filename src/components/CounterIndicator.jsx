import React from 'react'
import { useSelector } from 'react-redux'

const CounterIndicator = () => {
  const value = useSelector(state => state.counter.value)

  return <h1>{value}</h1>
}

export default CounterIndicator
