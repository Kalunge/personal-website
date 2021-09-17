import React from 'react';
import developer from '../assets/developer.jpg';

const Home = () => {
  return (
    <div className="home ms-auto row">
      <div className="col-md-6">
        <h2 className="heading">Hello there I am</h2>
        <h1 className="heading">----TITUS MUTHOMI</h1>
        <h3 className="descp">
          Hi, my name is Titus, I am a full-stack software engineer who
          leverages Javascript, React, Redux and Rails to craft solutions for
          real-world problems. I am an avid googler
        </h3>
      </div>
      <div className="col-md-6">
        <img src={developer} alt="snapshot" className="col-md-12" />
      </div>
    </div>
  );
};

export default Home;
