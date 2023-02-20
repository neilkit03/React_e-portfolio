import React from "react";
import "./Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <>
      <div
        className='contact d-flex mb-3'
        // style='justify-content: center'
        id='connect'
      >
        <h3>Connect with me</h3>
      </div>
      <h4>
        <em>
          Woohoo! Great timing, I'm waiting for any new oppotunities, <br />
          my inbox is always open. <br />
          Whether you have a question or just want to say hi, <br />
          I’ll try my best to get back to you!
        </em>
      </h4>

      <div className='social-icons'>
        <ul className='social-icons-sub d-flex'>
          <a href='https://github.com/neilkit03'>
            <i className='fa-brands fa-github'></i>
          </a>

          <a href='https://www.linkedin.com/login'>
            <i className='fa-brands fa-linkedin'></i>
          </a>

          <a href='https://www.instagram.com/'>
            <i className='fa-brands fa-instagram'></i>
          </a>
        </ul>
      </div>
      <div className='email-Link d-flex'>
        <h3>Email me</h3>
      </div>
      <div className='email d-flex'>
        <a href='mailto:neilkit03@gmail.com'>
          <i className='fa-regular fa-envelope'></i>
        </a>
      </div>
      <div className='spacebeforefooter'></div>

      <div className='footer d-flex mb-5'>
        <footer>
          <p className='footerBy d-block'>Designed & Built by Neil Prado</p>
          <p className='footerLink d-block'>All rights reserve 2023 &#174;</p>
        </footer>
      </div>
    </>
  );
};

export default Footer;
