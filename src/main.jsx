import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './component/Admin/Home.jsx'
import Restaurant from './component/Admin/Restaurant.jsx'
import Logout from './component/Admin/Logout.jsx'
import Managecategory from './component/Admin/Managecategory.jsx'
import Allowmember from './component/Admin/Allowmember.jsx'
import Managemember from './component/Admin/Managemember.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/Restaurant",
    element: <Restaurant />
  },
  {
    path: "/Logout",
    element: <Logout />
  },
  {
    path: "/Managecategory",
    element: <Managecategory />
  },
  {
    path: "/Allowmember",
    element: <Allowmember />
  },
  {
    path: "/Managemember",
    element: <Managemember />
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
