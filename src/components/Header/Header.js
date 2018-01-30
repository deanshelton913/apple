/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.scss';
import Link from '../Link';
// import Navigation from '../Navigation';
import wordmark from './logo-black.svg';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerIsOpen: false,
    };
  }

  toggleDrawer = () => {
    this.setState({ drawerIsOpen: !this.state.drawerIsOpen });
  };

  render() {
    const { drawerIsOpen } = this.state;
    return (
      <div className={s.container}>
        <nav className={cx(s.drawer, { [s.open]: drawerIsOpen })}>
          <i
            className={cx('fa', 'fa-times', s.closeButton)}
            aria-hidden="true"
            onClick={this.toggleDrawer}
          />
          <ul>
            <li>
              <Link to="/">Menu Item</Link>
            </li>
            <li>
              <Link to="/">Menu Item</Link>
            </li>
            <li>
              <Link to="/">Menu Item</Link>
            </li>
            <li>
              <Link to="/">Menu Item</Link>
            </li>
          </ul>
        </nav>
        <div className={s.mobileMenu}>
          <i
            className="fa fa-bars"
            aria-hidden="true"
            onClick={this.toggleDrawer}
          />
          <img src={wordmark} alt="Dragonchain wordmark" />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Header);
