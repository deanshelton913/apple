import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './HugeHeroSection.scss';
import mascot from './dragon.png';

class HugeHeroSection extends React.Component {
  render() {
    return (
      <section className={s.container}>
        <div className={s.content}>
          <h1>Next level fanny pack ramps</h1>
          <span>Blah blah blah</span>
          <div className={s.mascot}>
            <img src={mascot} alt="mascot" />
          </div>
        </div>
      </section>
    );
  }
}

export default withStyles(s)(HugeHeroSection);
