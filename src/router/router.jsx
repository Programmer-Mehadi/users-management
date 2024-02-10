import { Link, createBrowserRouter } from "react-router-dom"
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
  {
    path: "*",
    element: (
      <div className="text-center p-5 min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold">Not Found</h1>
        <Link to="/" className="underline">
          Go To Home
        </Link>
      </div>
    ),
  },
])

export default router
