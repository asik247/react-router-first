import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Navbar from './Components/Navbar/Navbar.jsx'
import Home from './Components/Home/Home.jsx'
import Root from './Components/Routs/Root.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
// import Navbar from './Components/Navbar/Navbar.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    Component:Root,
    children:[
      {index:true,Component:Home},
      {path:"about",Component:About},
      {path:"contact",Component:Contact},
      {path:"about",Component:About},
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
