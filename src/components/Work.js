import React from 'react'

const Work = ({img, description}) => {
  return (
    <div className="work col-md-4 mt-5" id="porfolio">
      <h4 className="heading">Javascript Capstone</h4>
      <img className="capstone" alt="capstone" src={img} />
      <p className="heading">{description}</p>
      <button className="btn btn-sm btn-primary mx-2">Live Demo</button>
      <button className="btn btn-sm btn-dark">Source Code </button>
    </div>
  );
}

export default Work
