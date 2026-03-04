import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Navbar from './Components/Navbar/Navbar.jsx'
// import Navbar from './Components/Navbar/Navbar.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    // element:<h1>Hello react router</h1>
    // element:<Navbar></Navbar>
    // Component:Navbar
    Component:Navbar
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
