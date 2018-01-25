/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.scss';
import Link from '../Link';
import Navigation from '../Navigation';

class Header extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <Link to="/">
          <span>Your Company</span>
        </Link>
        <div>
          <h1>React</h1>
          <p>Complex web apps made easy</p>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Header);
