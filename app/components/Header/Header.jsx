import React from 'react';

/**
 * Import locally scoped styles using css-loader
 * See style.sass in this directory.
 *
 * More info: https://github.com/webpack/css-loader#local-scope
 */
import styles from './style';

/**
 * Reference an image and get back a URL automatically via webpack.
 * webpack takes care of versioning, bundling for production, etc.
*/
import logoURL from './images/wickidcool-web-small.png';

export default class Header extends React.Component {
  render() {
    return <header className={styles.main}>
      <img className={styles.logo} src={logoURL} height="125" />

      <div className={styles.wrap}>
        <h1 className={styles.title}>Table Sorting Example</h1>
      </div>
    </header>;
  }
}
