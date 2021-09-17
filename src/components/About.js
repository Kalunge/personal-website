import React from 'react';
import fullstack from '../assets/fullstack.png';
import frontend from '../assets/frontend.png';
import backend from '../assets/backend.jpeg';

const About = () => {
  return (
    <div className="about">
      <h3>About Me</h3>
      <div className="col">
        <img src={frontend} className="rounded float-start mt-3" alt="..." />
        <img src={fullstack} className="rounded float-end mt-4" alt="..." />
        {/* <img className="img-thumbnail frontend" alt="..."></img> */}
        {/* <img src={fullstack} className="img-thumbnail fullstack" alt="..."></img> */}
        {/* <img src={backend} className="img-thumbnail backend" alt="..."></img> */}
      </div>
      <img src={backend} className="rounded mx-auto row mt-5" alt="..." />
    </div>
  );
};

export default About;
