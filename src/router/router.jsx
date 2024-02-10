import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import MainLayout from "../Layout/MainLayout"
import UserDetails from "../pages/UserDetails/UserDetails"
import AddUser from "../pages/AddUser/AddUser"

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
      {
        path: "/add-user",
        element: <AddUser />,
      },
    ],
  },
])

export default router
