import React from 'react';

const Work = ({ img, description }) => {
  return (
    <div
      className="card  col-md-4 mt-5"
      style={{ width: '18rem' }}
      id="porfolio"
    >
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title heading">Javascript Capstone</h5>
        <p className="card-text">{description}</p>
        <button className="btn btn-sm btn-primary mx-2">Live Demo</button>
        <button className="btn btn-sm btn-dark">Source Code </button>
      </div>
    </div>
  );
};

export default Work;
