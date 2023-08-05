import { Link } from "react-router-dom";
import "./footer.css"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <Link to="/">
          <img
            id="footer-img"
            src="https://res.cloudinary.com/drr0x3v88/image/upload/v1691100328/React%20-%20rock%20climbing%20ecommerce/logo_vikrql.png"
          />
        </Link>
        <p style={{ fontFamily: "Antonio", letterSpacing: "5px" }} className="footer-title">
          3/8 Gear shop
        </p>
      </div>

      <div className="copy-container">
        <p className="copyright">© All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer
