import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
            <Link className="navbar-brand" to="/">
              Blog
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <Link className="nav-link active" to="/introduce">
                  소개
                </Link>
                <Link className="nav-link active" to="/portfolio">
                  포트폴리오
                </Link>
                <Link className="nav-link active" to="/etc">
                  ETC
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Header;
