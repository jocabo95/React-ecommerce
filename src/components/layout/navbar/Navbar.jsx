import logo from "../../../assets/images/logo.png"
import CartWidget from "../../common/CartWidget/CartWidget";

const NavBar =()=>{

    return (

        <div style={{background: "black", color: "white"}}>

            <a>
            <img src={logo} alt="logo" style={{width: "50px"}} />
            </a>

            <ul>
            <li>Gatos</li>
            <li>Trad</li>
            <li>Deportiva</li>
            <li>Ferretería</li>
            <li>Otros</li>
            </ul>

            <CartWidget />

        </div>

    );
}

export default NavBar