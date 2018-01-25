/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
// import withStyles from 'isomorphic-style-loader/lib/withStyles';
// import s from './Footer.scss';
import Link from '../Link';

class Footer extends React.Component {
  render() {
    return (
      <div>
        <h2>Footer</h2>
        <div>
          <span>© Your Company</span>
          <span>·</span>
          <Link to="/">Home</Link>
          <span>·</span>
          <Link to="/admin">Admin</Link>
          <span>·</span>
          <Link to="/privacy">Privacy</Link>
          <span>·</span>
          <Link to="/not-found">Not Found</Link>
        </div>
      </div>
    );
  }
}

// export default withStyles(s)(Footer);
export default Footer;
