import { useParams } from "react-router";
import { eggsData } from "../../../helpers/data";
import { useEffect, useState } from "react";
import InputField from "../../elements/inputField";
import "./style.css";
import Header from "../../elements/header";
import Footer from "../../elements/footer";

const Detail = () => {
  const cartItems = localStorage.getItem("cart");
  const parsedCartItems = cartItems ? JSON.parse(cartItems) : [];
  const [cartData, setCartData] = useState(parsedCartItems);
  const [formData, setFormData] = useState({ quantity: "" });
  const [productDetail, setProductDetail] = useState([]);
  const [productPrice, setProductPrice] = useState(null);
  const eggsList = eggsData;
  const params = useParams();

  const selectedId = params?.id;
  const product = productDetail[0];

  const addProductToCart = () => {
    const productData = {
      id: product?.id,
      title: product?.title,
      quantity: formData?.quantity,
      amount: productPrice * formData?.quantity,
    };

    const existingItemInCart = cartData.find(
      (item) => item?.id === product?.id
    );

    if (existingItemInCart) {
      const updatedcart = cartData.map((item) =>
        item?.id === product?.id
          ? { ...item, quantity: formData?.quantity }
          : item
      );
      setCartData(updatedcart);
    } else {
      setCartData([...(cartData || []), { ...productData }]);
    }
  };

  useEffect(() => {
    if (eggsList.length > 0) {
      const filteredData = eggsList.filter((eggs) => eggs?.id === selectedId);
      setProductDetail(filteredData);
    }
  }, [eggsList]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartData));
  }, [cartData]);

  return (
    <>
      <Header />
      <div className="product-image">
        <img src={`/${product?.image}`} alt={product?.title} />
      </div>
      <h3 className="product-title">{product?.title}</h3>
      {!!product?.price && (
        <p className="product-price">{`Rs. ${product?.price}`}</p>
      )}
      <button onClick={addProductToCart} className="add-to-cart">
        Add to Cart
      </button>
      <div
        className="product-description"
        dangerouslySetInnerHTML={{ __html: product?.description }}
      />
      <div className="product-attributes">
        {product?.attributes &&
          product?.attributes.map((attr) => (
            <div key={attr.number}>
              <input
                type="radio"
                name={"attrribute"}
                value={attr?.price}
                onChange={(e) => {
                  setProductPrice(e.target.value);
                }}
              />
              <label htmlFor="">{`Pack of ${attr?.number}`}</label>
            </div>
          ))}
      </div>
      <p>{`Rs. ${!!productPrice ? productPrice : 0}`}</p>
      <div>
        <InputField
          label={"quantity"}
          type={"number"}
          showLabel={true}
          name="quantity"
          formData={formData}
          setFormData={setFormData}
        />
      </div>

      <Footer />
    </>
  );
};

export default Detail;
