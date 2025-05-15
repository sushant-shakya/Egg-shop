import "./style.css";
import Header from "../../elements/header";
import Footer from "../../elements/footer";

const About = () => {
  return (
    <>
      <Header />
      <div className="egg-page-wrapper">
        <div className="egg-page-header">
          <h1 className="egg-page-title">
            We are committed to providing the right nutrition, straight from the
            farm to your plate
          </h1>
          <p className="egg-page-intro">
            Our journey began with the realization that most consumers
            unknowingly purchase loose eggs of uncertain quality—often 10 to 15
            days old, laid by hens fed chemical-based feed, and handled through
            unhygienic channels. These eggs tend to have a rotten smell, runny
            yolks, and questionable freshness. To change this, we launched our
            project to bring truly farm-fresh eggs to consumers. Our website is
            dedicated to offering eggs that are not just 24 hours fresh but also
            sourced from hens fed 100% herbal feed (free from chemicals) and
            subjected to strict quality checks—ensuring a natural taste with no
            unpleasant odors.
          </p>
        </div>

        <h2 className="egg-process-title">How do we do it?</h2>

        <div className="egg-process-container">
          <div className="egg-process-step">
            <div className="egg-step-icon">
              <img src="/about1.png" alt="Bio Monitored Farm Icon" />
            </div>
            <div className="egg-step-content">
              <h3 className="egg-step-title">Bio Monitored Farm</h3>
              <p className="egg-step-description">
                We ensure each Egg' journey starts with{" "}
                <span className="egg-text-highlight">
                  bio-secured, hygienic & sanitized
                </span>{" "}
                poultry farms.
              </p>
            </div>
          </div>

          <div className="egg-process-step">
            <div className="egg-step-icon">
              <img src="/about2.png" alt="Herbal Feed Icon" />
            </div>
            <div className="egg-step-content">
              <h3 className="egg-step-title">100% Herbal Hen Feed</h3>
              <p className="egg-step-description">
                We feed our hens herbal feed, blend of Corn, Rice, Bajra, Soya,
                Marigold & more. Taaki sab kahe{" "}
                <span className="egg-hindi-text">"Anda ho vaye clean!"</span>
              </p>
            </div>
          </div>

          <div className="egg-process-step">
            <div className="egg-step-icon">
              <img src="/about3.png" alt="Safety Checks Icon" />
            </div>
            <div className="egg-step-content">
              <h3 className="egg-step-title">11 Safety Checks</h3>
              <p className="egg-step-description">
                Each egg passes through 11 safety checks including{" "}
                <span className="egg-text-highlight">
                  Cleaning, Candling, UV Sanitization & Grading
                </span>{" "}
                to meet the highest standards.
              </p>
            </div>
          </div>

          <div className="egg-process-step">
            <div className="egg-step-icon">
              <img src="/about4.png" alt="Farm Fresh Icon" />
            </div>
            <div className="egg-step-content">
              <h3 className="egg-step-title">1 Day Farm Fresh</h3>
              <p className="egg-step-description">
                Our eggs are laid, inspected, and delightfully delivered to you
                within 1 day!
              </p>
            </div>
          </div>
        </div>

        <h2 className="egg-fun-title">Our Production Team</h2>

        <div className="egg-birds-gallery">
          <img src="/chicken.png" alt="Chicken" className="egg-bird-img" />
          <img src="/duck.png" alt="White Duck" className="egg-bird-img" />
          <img src="/ostrich.png" alt="Ostrich" className="egg-bird-img" />
          <img src="/quail.png" alt="Quail" className="egg-bird-img" />
          <img src="/gooes.png" alt="Goose" className="egg-bird-img" />
          <img src="/turkey.png" alt="Turkey" className="egg-bird-img" />
        </div>
      </div>
      <div className="egg-impact-section">
        <h2 className="egg-impact-title">
          Today's Healthy Choice Can Make a Big Impact
        </h2>
        <h3 className="egg-impact-subtitle">Start Now</h3>

        <div className="egg-impact-cards">
          <div className="egg-impact-card">
            <img src="/impact1.png" alt="Good Choice" />
            <h4>Choose what is good for you</h4>
            <p>
              At Eggoz, we take pride in serving you one-day fresh eggs, free
              from chemicals and antibiotics. Our eggs come from hens fed 100%
              herbal feed, ensuring their complete nourishment. This results in
              thick egg whites and vibrant orange yolks, enriched with essential
              nutrients such as protein, vitamin D, lutein, vitamin A, and more.
            </p>
          </div>

          <div className="egg-impact-card">
            <img src="/impact2.png" alt="Freshest Eggs" />
            <h4>But how do you get the freshest eggs</h4>
            <p>
              Each egg comes from local poultry farmers, enabling us to deliver
              fresh eggs within one day after undergoing 11 safety checks. These
              include biosecurity measures, pH testing, shell strength
              assessment, candling, cleaning, and UV sanitization—ensuring
              top-notch quality and hygiene.
            </p>
          </div>

          <div className="egg-impact-card">
            <img src="/impact3.png" alt="Supporting Farmers" />
            <h4>Supporting Farmers</h4>
            <p>
              We ensure proper care for our hens by providing 100% herbal feed
              and timely veterinary care. We work directly with farmers,
              leveraging technology like IoT devices to improve poultry welfare
              and smart egg production through our Farmer App.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
