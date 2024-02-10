import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import MainLayout from "../Layout/MainLayout"
import UserDetails from "../pages/UserDetails/UserDetails"

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <App />,
      },
      {
        path: "/user/:id",
        element: <UserDetails />,
      },
    ],
  },
])

export default router
