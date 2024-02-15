import React from 'react'
import Home from "./Components/Home.jsx"
import { Base } from './Base.js'
const App = () => {
  return (
    <div>
      {Base.map(item =>
      <Home item={item} />
        )}
    </div>
  )
}

export default App