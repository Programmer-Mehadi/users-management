import { Outlet } from "react-router-dom"
import Navbar from "../components/shared/Navbar"

export default function MainLayout() {
  return (
    <div>
      <Navbar />
      <section className="max-w-screen-8xl mx-auto px-5">
        <Outlet />
      </section>
    </div>
  )
}
