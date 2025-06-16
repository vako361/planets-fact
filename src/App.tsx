
import './App.css'
import Layout from './components/Layout'
import Planet from './components/Planet'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
const router = createBrowserRouter([{
  path:'/',
  element:<Layout />,
  children: [{
    path:'planet/:id',
    element:<Planet />,
  }]
},
])
function App() {

   return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
