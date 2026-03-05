import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Navbar from './Components/Navbar/Navbar.jsx'
import Home from './Components/Home/Home.jsx'
import Root from './Components/Routs/Root.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Users from './Components/Users/Users.jsx'
import Post from './Components/Post/Post.jsx'
import UsersDetails from './Components/UsersDetails/UsersDetails.jsx'
import Comments from './Components/Comments/Comments.jsx'
import CommentsDetails from './Components/CommentsDetails/CommentsDetails.jsx'

// old fetch data load.
const postPromise = fetch("https://jsonplaceholder.typicode.com/users/1/todos").then(res=>res.json())

const router = createBrowserRouter([
  {
    path:"/",
    Component:Root,
    children:[
      {index:true,Component:Home},
      {path:"about",Component:About},
      {path:"contact",Component:Contact},
      {path:"about",Component:About},

      {
        path:"users",
        loader:()=> fetch("https://jsonplaceholder.typicode.com/users"),
        Component:Users
      },
      {
        path:"users/:usersId",
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.usersId}`),
        Component:UsersDetails
      },
      {
        path:'comments',
        loader:()=>fetch("https://jsonplaceholder.typicode.com/comments"),
        Component:Comments
      }
      ,
      {
        path:'comments/:id',
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/comments/${params.id}`),
        Component:CommentsDetails
      },






      {path:"post",
       element:<Suspense fallback={<span>Loaddin...</span>}>


        <Post postPromise={postPromise}></Post>
       </Suspense>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
