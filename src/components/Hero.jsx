import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div className='heroBG'>
        <div className='hero-text1'>
          <div>
            <p className='hi mt-5'>Hi, my name is</p>
            <article className='NameHeadline'>
              <h1>Armstrong</h1>
              <h1>Neil</h1>
              <h1>Prado</h1>
            </article>
          </div>
        </div>
        <div className='hero-text2'>
          <div>
            <h3 className='sub-hero-text2'>Web Developer</h3>
            <p className='sub-text'>
              <span>Over&nbsp;</span>
              <span>the&nbsp;</span>
              <span>last&nbsp;</span>
              <span>years,&nbsp;</span>
              <span>the&nbsp;</span>
              <span>field&nbsp;</span>
              <span>of&nbsp;</span>
              <span>web&nbsp;</span>
              <span>development&nbsp;</span>
              <span>has&nbsp;</span>
              <span>expanded&nbsp;</span>
              <span>incredibly&nbsp;</span>
              <span>quickly,&nbsp;</span>
              <span>and&nbsp;</span>
              <span>my&nbsp;</span>
              <span>goal&nbsp;</span>
              <span>has&nbsp;</span>
              <span>been&nbsp;</span>
              <span>to&nbsp;</span>
              <span>keep&nbsp;</span>
              <span>up&nbsp;</span>
              <span>with&nbsp;</span>
              <span>it.&nbsp;</span>
              <span>Educating&nbsp;</span>
              <span>myself&nbsp;</span>
              <span>and&nbsp;</span>
              <span>constantly&nbsp;</span>
              <span>acquiring&nbsp;</span>
              <span>new&nbsp;</span>
              <span>skills.&nbsp;</span>
            </p>
          </div>
        </div>
        <div className='btn-hero mt-4 mb-5'>
          <a className='aboutBtn' href='#aboutme'>
            Learn more about me!
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;
