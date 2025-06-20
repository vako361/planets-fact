// App.tsx
import './App.css'
import Layout from './components/Layout'
import Planet from './pages/Planet'
import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const [menu, setMenu] = useState<boolean>(false)

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout menu={menu} setMenu={setMenu} />,
      children: [
        {
          path: '/:planet',
          element: <Planet menu={menu} />
        }
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App
