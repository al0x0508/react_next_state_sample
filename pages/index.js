import React, {useState} from 'react'

function Index(props) {

  // Hook initialisation with SSR generated counter
  const [count, setCount] = useState(props.initialCounter);

  // Add to counter
  const addCount = () => {
    setCount(count + 1);
  }

  // Render
  return (
    <div>
      <p>You hit {count} times</p>
      <button onClick={addCount}>
        Add counter
      </button>
    </div>
  )
}

// SSR
Index.getInitialProps = async () => {
  return { initialCounter: 10 }
}

export default Index
