import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
            <Link class="navbar-brand" to="/">
              Blog
            </Link>
            <div class="collapse navbar-collapse">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link class="nav-link" to="/home">
                    홈
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/introduce">
                    소개
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/portfolio">
                    포트폴리오
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Header;
