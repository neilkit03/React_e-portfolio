import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <nav className='navbar navbar-expand-lg col-md-12 col-sm-12 mt-3'>
        <div className='container-fluid'>
          <img
            src='./new_logo.png'
            alt='neil logo'
            width='70px'
            height='50px'
          />
          <a className='navbar-brand' href='#'></a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNavAltMarkup'
            aria-controls='navbarNavAltMarkup'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span
              className='navbar-toggler-icon'
              style='background-color: #cac0b3'
            ></span>
          </button>
          <div
            className='collapse navbar-collapse'
            id='navbarNavAltMarkup'
            style='justify-content: end'
          >
            <div className='navbar-nav'>
              <a
                className='nav-link active'
                aria-current='page'
                href='#'
                style='color: #cac0b3'
              >
                <strong>"//Home"</strong>
              </a>
              <a
                className='nav-link active'
                aria-current='page'
                href='#'
                style='color: #cac0b3'
              >
                <strong>"//Projects"</strong>
              </a>
              <a
                className='nav-link active'
                aria-current='page'
                href='#connect'
                style='color: #cac0b3'
              >
                <strong>"//Connect with me"</strong>
              </a>
              <a
                className='resumeDL'
                href='./Sample_Resume.pdf'
                download='Sampleresume'
              >
                <i className='fa-solid fa-download'></i> resume
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
