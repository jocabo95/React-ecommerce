import { Skeleton } from "@mui/material";
import ProductCard from "../../common/ProductCard/ProductCard";


const ItemList = ({items}) => {

  // fictional arr que decide # de skelletons en return
  const arr = [1, 2, 3, 4]

  return (
    <div>

      <div style={{display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "2rem", paddingTop:"80px", paddingBottom:"5rem"}}>

        {/* Ternario para decidir si display products o skelleton */}
        {items.length > 0 ? items.map((item)=>{
            return(
              // key debe ir en 1er etiqueta de metodo map
              // debe tener un valor != para cada map element
              <ProductCard key={item.id} item={item}/>
            )
          }) : 
            arr.map((el)=>{
              return (
                <div key={el}>
                  {/* For variant="text", adjust the height via font-size */}
                  <Skeleton variant="rectangular" sx={{ fontSize: "3rem" }} />
                  {/* For other variants, adjust the size with `width` and `height` */}
                  <Skeleton variant="text" width={90} height={40} />
                  <Skeleton variant="text" width={210} height={60} />
                  <Skeleton variant="text" width={210} height={60} />
                </div>
              );
            })
          

        }
          
        


      </div>
      
    </div>
  );

}

export default ItemList