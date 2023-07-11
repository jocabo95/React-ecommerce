import { Box, Grid } from "@mui/material";
import logo from "../../../assets/images/logo.png"
import CartWidget from "../../common/CartWidget/CartWidget";
import "./Navbar.css";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";


const NavBar =()=>{

  return (

    <div>
      <Box sx={{ position:"fixed", width:"100%", backgroundColor: "black", color: "white", paddingTop: "0.2rem", paddingBottom: "0.2rem" }}>
        <Grid container>

          {/* logo */}
          <Grid item xs={2} md={1} className="logo-container">
            <Link to="/">
              <a>
                <img id="logo" src={logo} alt="logo" />
              </a>
            </Link>
          </Grid>

          {/* nav links */}
          <Grid item xs={8} md={10}>
            <ul className="navbar-list-container">
              <a href="#">
                <li className="navbar-list-item">Clásica</li>
              </a>
              <a href="#">
                <li className="navbar-list-item">Deportiva</li>
              </a>
              <a href="#">
                <li className="navbar-list-item">Otros</li>
              </a>
            </ul>
          </Grid>

          {/* cart */}
          <Grid item xs={2} md={1} className="cart-container">
            <CartWidget />
          </Grid>

        </Grid>
      </Box>

      {/* render navbar children from .app */}
      <Outlet />
    </div>

  );
}

export default NavBar