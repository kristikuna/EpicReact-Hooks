// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'

function useLocalStorageState(key, defaultValue = '') {
  React.useEffect(() => {
    window.localStorage.setItem(key, defaultValue)
  }, [key, defaultValue])
  return window.localStorage.getItem('name') || defaultValue
}

function Greeting({initialName = ''}) {
  const [name, setName] = React.useState(
    useLocalStorageState('name', initialName),
  )

  React.useEffect(() => {
    window.localStorage.setItem('name', name)
  }, [name])

  function handleChange(event) {
    setName(event.target.value)
  }
  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting />
}

export default App
