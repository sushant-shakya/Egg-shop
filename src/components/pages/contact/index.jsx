import React from "react";
import "./style.css";
import Header from "../../elements/header";

const Contact = () => {
  return (
    <>
      <Header />
      <div className="contact-container">
        <div className="contact-info">
          <h2>How can we help you?</h2>
          <div className="contact-details">
            <h4>Contact</h4>
            <p>977-9847650007</p>
            <p>
              <a href="mailto:andapasal@gmail.com">andapasal@gmail.com</a>
            </p>
          </div>

          <h2>Where are we located?</h2>
          <div className="location-details">
            <h4>Showroom Address</h4>
            <p>Patan, Lalitpur</p>
            <p>Nepal, 44600</p>
          </div>

          <h2>Want to see what we’re up to?</h2>
          <div className="social-media">
            <h4>Follow Us</h4>
            <div className="icons">
              <a href="#">
                <img src="#" alt="Instagram" />
              </a>
              <a href="#">
                <img src="#" alt="Email" />
              </a>
              <a href="#">
                <img src="#" alt="WhatsApp" />
              </a>
            </div>
          </div>
        </div>

        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.5022812522473!2d85.32379601474175!3d27.679859133548918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1916f464c067%3A0xa497e1b0d693589!2sLabim%20Mall!5e0!3m2!1sen!2snp!4v1701309127642!5m2!1sen!2snp"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Labim Mall Map"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Contact;
