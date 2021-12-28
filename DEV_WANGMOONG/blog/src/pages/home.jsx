import React from 'react';
import { Link } from 'react-router-dom';
import styles from './css/app.module.css';

class Home extends React.Component {
  render() {
    return (
      <div className={styles.content}>
        <div>
          <h1>Cover your page.</h1>
          <p className="lead">
            Cover is a one-page template for building simple and beautiful home
            pages. Download, edit the text, and add your own fullscreen
            background photo to make it your own.
          </p>
          <p className="lead">
            <Link
              className=" btn btn-lg btn-secondary fw-bold border-black bg-black"
              to="/"
            >
              Learn more
            </Link>
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
