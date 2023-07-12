import NavBar from "./navbar/Navbar"
import Footer from "./footer/Footer"
import { Outlet } from "react-router"


const Layout = () => {
  return (
    <div>
        <NavBar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout