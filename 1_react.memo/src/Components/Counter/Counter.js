import React, { useState } from 'react'

const Title = props => {
  const { title } = props

  console.log(`${title} is rendering!`)

  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}

const ReactMemoTitle = React.memo(Title)

const Counter = props => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <section>
        <Title
          title='Normal Title'
        />
      </section>
      <section>
        <ReactMemoTitle
          title='ReactMemo Title'
        />
      </section>

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
