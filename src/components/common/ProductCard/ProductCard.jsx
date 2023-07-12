import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const ProductCard = ({item}) => {
  return (
    <Card key={item.id} sx={{ width: 345 }}>

        <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={item.img}
        />

        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {item.title}
            </Typography>

            <Typography variant="body2" color="text.secondary">
                {item.description}
            </Typography>
        </CardContent>

        <CardActions>
            <Link to={`/itemDetail/${item.id}`}>
                <Button size="small">ver detalle</Button>
            </Link>
        </CardActions>

    </Card>
  );
};

export default ProductCard;
