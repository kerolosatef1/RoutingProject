import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './Components/About'
import Portfolio from './Components/Portfolio'
import Layout from './Components/Layout'
import Contact from './Components/Contact'
import FrameWork from './Components/FrameWork'
import Notfound from './Components/Notfound';






let x= createBrowserRouter([
  {path:"",element:<Layout/>,
    children:[
      {path:"home", element:<Home/>},
      {path:"about", element:<About/>},
      {path:"Portfolio", element:<Portfolio/>},
      {path:"contact", element:<Contact/>},
      {path:"framework", element:<FrameWork/>},
      {path: "*", element:<Notfound/>}
      
      
    ]
   },
])
function App() {
  const [count, setCount] = useState(0)

  return <RouterProvider router={x}></RouterProvider>
 
  }
export default App
