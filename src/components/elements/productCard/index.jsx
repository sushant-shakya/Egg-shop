import { Link } from "react-router";
import "./style.css";
import Button from "../button";

const ProductCard = ({ product }) => {
  return (
    <Link
      className="product-card"
      key={product?.title}
      to={`/product/${product?.id}`}
    >
      <div className="product-image">
        <img src={`/${product?.image}`} alt={product?.title} />
      </div>
      <h3 className="product-title">{product?.title}</h3>
      {!!product?.price && (
        <p className="product-price">{`Rs. ${product?.price}`}</p>
      )}
      <Button buttonlabel={"Add to Cart"} />
    </Link>
  );
};

export default ProductCard;
