import React from 'react';
import styles from './../../pages/css/app.module.css';

class Footer extends React.Component {
  render() {
    return (
      <div>
        <footer className={styles.footer}>
          <p>
            Cover template for{' '}
            <a href="https://getbootstrap.com/" className="text-white">
              Bootstrap
            </a>
            , by{' '}
            <a href="https://twitter.com/mdo" className="text-white">
              @mdo
            </a>
            .
          </p>
        </footer>
      </div>
    );
  }
}

export default Footer;
