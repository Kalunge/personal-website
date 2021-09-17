import React from 'react';

const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-primary ">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            Home
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" style={{color:'red'}}></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#home">
                  About
                </a>
              </li>

              <li class="nav-item">
                <a
                  class="nav-link "
                  href="#portfolio"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Portfolio
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#home">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
