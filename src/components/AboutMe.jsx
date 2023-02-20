import React from "react";
import "./AboutMe.css";
import "bootstrap/dist/css/bootstrap.min.css";

const AboutMe = () => {
  return (
    <>
      <div className='secondspace'></div>

      <div
        className='aboutmePhotoBox d-flex mt-5'
        id='aboutme'
        // style='justify-content: space-around'
      >
        <div className='aboutmeBox'>
          <h3>About me!</h3>
          <p className='mystory'>
            Hi, I am Armstrong Neil Prado. you can call me Neil. My Interest in
            web development started i architecto laboriosam cupiditate eaque!
            Illo dolor dolore esse sapiente, sit quibusdam porro quas nulla.
          </p>
          <p className='mystory'>
            Culpa illum minima, velit porro quas cumque, aut voluptate odit vel,
            dolore itaque. Natus harum recusandae unde velit animi, tempora
            facere quasi. Ex amet velit mollitia laudantium aspernatur!
            Repellat, non.
          </p>
          <p className='mystory'>
            Rerum nihil doloremque expedita earum illum rem impedit tempora
            omnis id repellendus voluptates veritatis dolore facere asperiores,
            libero enim ipsam itaque, cum quos? Laborum ipsa dignissimos, quos
            debitis ratione fugiat!
          </p>
        </div>
        <div className='myphotobox mt-5'>
          <img className='myphoto' src='./neilprado.jpg' alt='neil photo' />
        </div>
      </div>
    </>
  );
};

export default AboutMe;
