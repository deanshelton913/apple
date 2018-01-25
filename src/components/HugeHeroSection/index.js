import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './HugeHeroSection.scss';

class HugeHeroSection extends React.Component {
  render() {
    return (
      <section className={s.container}>
        <div className={s.content}>
          <h1>I am a header</h1>
          <span>Blah blah blah</span>
        </div>
      </section>
    );
  }
}

export default withStyles(s)(HugeHeroSection);
