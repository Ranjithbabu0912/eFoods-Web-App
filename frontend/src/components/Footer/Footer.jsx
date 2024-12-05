import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <h1>eFoods.</h1>
          {/* <img src={assets.logo} alt="" /> */}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            repudiandae iure tenetur exercitationem dignissimos praesentium
            adipisci rerum eos reprehenderit, fugiat ullam odio reiciendis id
            quasi ducimus ex illo quibusdam velit cumque unde! Voluptatibus,
            officia quis.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="facebook" />
            <img src={assets.twitter_icon} alt="twitter" />
            <img src={assets.linkedin_icon} alt="linkedin" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91-90800-80080</li>
            <li>efoods.info@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 © eFoods.com - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
