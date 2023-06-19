import { Box, Grid } from "@mui/material";
import logo from "../../../assets/images/logo.png"
import CartWidget from "../../common/CartWidget/CartWidget";

const NavBar =()=>{

    return (

      <Box sx={{backgroundColor:"black", color:"white"}}>
        <Grid container>
          <Grid item xs="2">
            <a>
              <img src={logo} alt="logo" style={{ width: "50px" }} />
            </a>
          </Grid>
          <Grid item xs="8" sx={{ border:"solid red" }}>
            <ul>
              <li>Clásica</li>
              <li>Deportiva</li>
              <li>Otros</li>
            </ul>
          </Grid>
          <Grid item xs="2">
            <CartWidget />
          </Grid>
        </Grid>
      </Box>
    );
}

export default NavBar