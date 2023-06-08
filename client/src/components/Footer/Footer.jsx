import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='top'>
        <div className='item'>
          <h1>Category</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accesories</span>
          <span>New Arrivals</span>
        </div>
        <div className='item'>
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className='item'>
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab magnam
            vitae ullam doloremque nemo provident nisi? Ipsum officiis debitis
            tenetur deserunt blanditiis voluptates sequi, porro, quam mollitia
            similique quis nobis ea. Laborum temporibus deserunt repudiandae
            libero eos ipsam veritatis optio.
          </span>
        </div>
        <div className='item'>
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab magnam
            vitae ullam doloremque nemo provident nisi? Ipsum officiis debitis
            tenetur deserunt blanditiis voluptates sequi, porro, quam mollitia
            similique quis nobis ea. Laborum temporibus deserunt repudiandae
            libero eos ipsam veritatis optio.
          </span>
        </div>
      </div>
      <div className='bottom'>
        <div className='left'>
          <span className='logo'>BlackStore</span>
          <span className='copyright'>
            © Copyright 2023. ALl Rights Reserved
          </span>
        </div>
        <div className='right'>
          <img src='/img/payment.png' alt='' />
        </div>
      </div>
    </div>
  );
};

export default Footer;
