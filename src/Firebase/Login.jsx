import React, { useRef, useState } from 'react'

const Login = () => {
    const [first, setfirst] = useState()
    const [password, setfirst] = useState()
    let ref1 = useRef()
    let ref2 = useRef()
    const handleClick = ()=>{
        
    }
  return (
    <div>
        <input type="text" ref={ref1} />
        <input type="text" ref={ref2} />
        <button onClick={handleClick} >Submit</button>
    </div>
  )
}

export default Login