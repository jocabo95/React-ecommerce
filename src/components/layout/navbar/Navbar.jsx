import { Box, Grid } from "@mui/material";
import logo from "../../../assets/images/logo.png"
import CartWidget from "../../common/CartWidget/CartWidget";
import "./Navbar.css";


const NavBar =()=>{

    return (
      <Box sx={{ backgroundColor: "black", color: "white", paddingTop: "0.2rem", paddingBottom: "0.2rem" }}>
        <Grid container>
          <Grid item xs="2" md="1" className="logo-container">
            <a>
              <img id="logo" src={logo} alt="logo" />
            </a>
          </Grid>
          <Grid item xs="8" md="10">
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
          <Grid item xs="2" md="1" className="cart-container">
            <CartWidget />
          </Grid>
        </Grid>
      </Box>
    );
}

export default NavBar