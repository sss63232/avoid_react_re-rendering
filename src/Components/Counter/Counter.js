import React, { useState } from 'react'

const CounterTitle = () => {
  console.log('Title rendering!')
  return (
    <div>
      <h1>Counter</h1>
    </div>
  )
}

const Counter = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <CounterTitle />

      <div>{`current count:：${count}`}</div>

      <button
        type='button'
        onClick={() => {
          setCount(count + 1)
        }}
      >
        add 1
      </button>
    </div>
  )
}

export default Counter
