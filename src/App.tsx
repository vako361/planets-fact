
import './App.css'
import Layout from './components/Layout'
import Planet from './pages/Planet'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout />,
    children:[
      {
        path:'/:planet',
        element:<Planet />
      }
    ]
  }
])

function App() {
  console.log('string')
  return (
      <RouterProvider router={router} />
);
}

export default App;
