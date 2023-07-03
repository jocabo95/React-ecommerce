import ProductCard from "../../common/ProductCard/ProductCard";


const ItemList = ({items}) => {

  console.log({items});

  return (
    <div>
      <h1>Aca van los productos</h1>

      <div style={{display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "2rem"}}>

        {items.map((item) => {
          return (
            // key debe ir en 1er etiqueta de metodo map
            // debe tener un valor != para cada map element
            <ProductCard key={item.id} item={item}/>
            
          );
        })}

      </div>
      
    </div>
  );

}

export default ItemList