// import { useEffect, useState } from "react"
// import "./Firebase/config"
// import { getAuth, onAuthStateChanged } from "firebase/auth"
// const App = () => {
//   const [login, setlogin] = useState(false)

//   let auth = getAuth()
//   console.log(auth);
//   useEffect(() => {
//     let fildOut = onAuthStateChanged(auth,(user)=>{
//       if (user) {
//         setlogin(user)
//       } else {
//         setlogin(false)
//       }
//     })
//     return fildOut
//   }, [auth])
//   console.log(login)
//   return (
//     <div>

//     </div>
//   )
// }

// export default App

// 2222222222222222222
// import React from 'react'
// import News from "./bot/New"
// const App = () => {
//   return (
//     <div>
//       <News/>
//     </div>
//   )
// }

// export default App


import Home from "./Quiz/components/Home"
import "./Quiz/style/style.scss"
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
const App = () => {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Home />} >
        {/* <Route index element={<Home />} /> */}
      </Route>
    )
  )
  return (
    <div>
      <RouterProvider router={route} />
    </div>
  )
}

export default App