import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

// external-global styles must be imported in your JS.
import fontAwesomeCss from 'font-awesome.css';
import resetCss from 'reset.css';

import s from './Layout.scss';
import Header from '../Header';
import Footer from '../Footer';

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <div className={s.container}>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default withStyles(resetCss, fontAwesomeCss, s)(Layout);
