import React from 'react'

const Contact = () => {
  return (
    <div className="row mt-5">
      <h2>Contact Me </h2>
      <div className="col-md-3"></div>
      <form className="col-md-9">
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Email address"
          />
        </div>
        <div className="mb-3">
          <textarea type="text" className="form-control" placeholder="Message" />
        </div>
        <button type="submit" className="btn btn-primary about-button">
          Talk to Me
        </button>
      </form>
    </div>
  );
}

export default Contact
