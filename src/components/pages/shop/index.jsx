import { useEffect, useState } from "react";
import "./style.css";
import { eggsData } from "../../../helpers/data";
import ProductCard from "../../elements/productCard";
import Header from "../../elements/header";
import Footer from "../../elements/footer";

const Shop = () => {
  const [loading, setLoading] = useState(true);
  const [eggsList, setEggsList] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);

    setEggsList(eggsData);
  }, []);

  return (
    <>
      <Header />
      <h2 className="section-title">All Products</h2>
      {!!loading ? (
        <p>Loading...</p>
      ) : (
        <div className="products-grid">
          {(eggsList || []).map((egg, idx) => (
            <ProductCard key={idx} product={egg} />
          ))}
        </div>
      )}
      <Footer />
    </>
  );
};

export default Shop;
