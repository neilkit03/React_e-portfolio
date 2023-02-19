import React from "react";

const AboutMe = () => {
  return (
    <>
      <div class='secondspace'></div>

      <div
        class='aboutmePhotoBox d-flex mt-5'
        id='aboutme'
        style='justify-content: space-around'
      >
        <div class='aboutmeBox'>
          <h3>About me!</h3>
          <p class='mystory'>
            Hi, I am Armstrong Neil Prado. you can call me Neil. My Interest in
            web development started i architecto laboriosam cupiditate eaque!
            Illo dolor dolore esse sapiente, sit quibusdam porro quas nulla.
          </p>
          <p class='mystory'>
            Culpa illum minima, velit porro quas cumque, aut voluptate odit vel,
            dolore itaque. Natus harum recusandae unde velit animi, tempora
            facere quasi. Ex amet velit mollitia laudantium aspernatur!
            Repellat, non.
          </p>
          <p class='mystory'>
            Rerum nihil doloremque expedita earum illum rem impedit tempora
            omnis id repellendus voluptates veritatis dolore facere asperiores,
            libero enim ipsam itaque, cum quos? Laborum ipsa dignissimos, quos
            debitis ratione fugiat!
          </p>
        </div>
        <div class='myphotobox mt-5'>
          <img class='myphoto' src='./neilprado.jpg' alt='neil photo' />
        </div>
      </div>
    </>
  );
};

export default AboutMe;
