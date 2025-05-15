import React, { useEffect, useState } from "react";
import "./style.css";
import { eggsData } from "../../../helpers/data";
import ProductCard from "../../elements/productCard";
import Header from "../../elements/header";
import Footer from "../../elements/footer";
import Slider from "react-slick";

const Main = () => {
  var settings = {
    dots: true,
    autoplay: true,
    adaptiveHeight: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const sliderImages = ["/Asset 1.png", "/Asset 2.png", "/Asset 3.png"];

  const [loading, setLoading] = useState(true);
  const [eggsList, setEggsList] = useState([]);

  const [bestSellingEggs, setBestSellingEggs] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, [500]);

    setEggsList(eggsData);
  }, []);

  useEffect(() => {
    if (eggsList.length > 0) {
      const filteredData = eggsList.filter(
        (eggs) => eggs?.isBestSelling === true
      );
      setBestSellingEggs(filteredData);
    }
  }, [eggsList]);

  return (
    <>
      <Header />

      <section className="hero">
        <Slider {...settings}>
          {sliderImages.map((image) => (
            <img key={image} src={image} alt="" />
          ))}
        </Slider>
      </section>

      <h2 className="section-title">Our Best Sellers</h2>
      {!!loading ? (
        <p>Loading...</p>
      ) : (
        <div className="products-grid">
          {(bestSellingEggs || []).map((egg) => (
            <React.Fragment key={egg.id}>
              <ProductCard product={egg} />
            </React.Fragment>
          ))}
        </div>
      )}

      <section className="signature-section">
        <h2 className="signature-title">
          Secret Behind Our Signature Orange Yolk
        </h2>
        <div className="ingredients-grid">
          <div className="ingredient-item">
            <div className="ingredient-image">
              <img src="/flower.png" alt="Flower Petals" />
            </div>
            <p className="ingredient-name">Flower Petals</p>
          </div>

          <div className="ingredient-item">
            <div className="ingredient-image">
              <img src="/tumeric.png" alt="Turmeric" />
            </div>
            <p className="ingredient-name">Turmeric</p>
          </div>

          <div className="ingredient-item">
            <div className="ingredient-image">
              <img src="/pepper.png" alt="Red Pepper" />
            </div>
            <p className="ingredient-name">Red Pepper</p>
          </div>

          <div className="ingredient-item">
            <div className="ingredient-image">
              <img src="/grains.png" alt="Grains" />
            </div>
            <p className="ingredient-name">Grains</p>
          </div>
        </div>
      </section>

      <div className="featured-image">
        <img src="/image-3.png" alt="Fried egg on toast" />
      </div>
      <h3 className="featured-caption">Choose Fresh EveryDay!</h3>

      {/* More Products Section */}
      <div className="products-grid">
        {(eggsList || []).map((egg) => (
          <React.Fragment key={egg.id}>
            <ProductCard product={egg} />
          </React.Fragment>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Main;
