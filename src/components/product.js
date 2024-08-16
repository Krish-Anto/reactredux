import "../App.css";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "./CRUD/cartSlice";

export function Product({ product, id }) {

     const navigate = useNavigate()
     
     const dispatch = useDispatch();

     const handleAddToCart = () => {
            dispatch(addToCart(product))}

  return (
    <div className="product-container">
      <img className="product-image" src={product.image} alt={product.title} />
      <div className="product-spec">
        <h1 className="product-name">
        {product.brand} {product.title} - {id}
        </h1>
        <p className="product-rating">⭐{product.rating}</p>
      </div>
      {/* <IconButton
        aria-label="toggleBtn"
        color="primary"
        onClick={() => setShow(!show)}
      >
        {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </IconButton> */}
      <button >Toggle</button>
      <button onClick={()=>navigate("/p/"+ id)}>Info</button>
      <p className="product-summary">{product.description}</p>

      {/* <IconButton
        aria-label="toggleBtn"
        color="primary"
        onClick={() => navigate("/products/" + id)}
      >
        <InfoIcon />
      </IconButton> */}

      <div className="price-align">
        <p className="product-price">Price - Rs.{product.price}</p>
        <p >Discount - {product.discountPercentage}%</p>
       <div> 
        <Button color="success" variant="outlined"
        onClick={handleAddToCart}
       >Add to Cart</Button>
       
       </div> 
      </div>
      
    </div>
  );
}
