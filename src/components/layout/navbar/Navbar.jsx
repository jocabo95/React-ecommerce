import { Box, Grid } from "@mui/material";
import logo from "../../../assets/images/logo.png"
import CartWidget from "../../common/CartWidget/CartWidget";
import "./Navbar.css";
import { Link } from "react-router-dom";


const NavBar =()=>{

  return (
    <div>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#666859",
          color: "white",
          paddingTop: "0.2rem",
          paddingBottom: "0.2rem",
          position: "fixed",
          zIndex: "100",
        }}
      >
        <Grid container>
          {/* logo */}
          <Grid item xs={2} md={1} className="logo-container">
            <Link to="/">
              <img id="logo" src={logo} alt="logo" />
            </Link>
          </Grid>

          {/* cart */}
          <Grid item xs={2} md={1} className="cart-container">
            <CartWidget />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default NavBar