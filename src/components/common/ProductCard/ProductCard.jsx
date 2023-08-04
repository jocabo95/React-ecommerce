import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import "./productCard.css";
import { NumericFormat } from "react-number-format";

const ProductCard = ({ item }) => {
  return (
    <Link to={`/itemDetail/${item.id}`} style={{ textDecoration: "none" }}>

      <Card key={item.id} sx={{ width: 445 }} className="card">

        <div className="product-img-container">
          <CardMedia
            id="card-img"
            component="img"
            alt={item.title}
            height="140"
            image={item.img}
          />
        </div>

        <CardContent>
          <Typography
            sx={{
              TextDecoration: "none",
              fontSize: "1rem",
              fontWeight: "400",
              marginBottom: "0px",
            }}
            className="productCard-title"
            gutterBottom
            variant="h6"
            component="div"
          >
            {item.title}
          </Typography>

          <Typography
            className="productCard-description"
            sx={{ fontSize: "0.8rem", fontWeight: "700", marginBottom: "20px" }}
            variant="body2"
            color="text.secondary"
          >
            {item.description}
          </Typography>

          <Typography
            sx={{ fontSize: "1rem", fontWeight: "600", color: "black" }}
            variant="body2"
            color="text.secondary"
          >
            <NumericFormat
              value={item.price.toFixed(0)}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
              suffix=" COP"
            />
          </Typography>

        </CardContent>

      </Card>

    </Link>
  );
};

export default ProductCard;