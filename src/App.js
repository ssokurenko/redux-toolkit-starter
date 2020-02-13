import React from 'react'
import CounterIndicator from './components/CounterIndicator'
import CounterButtons from './components/CounterButtons'

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="lin-card has-space-top text-center">
            <CounterIndicator />
            <CounterButtons />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
