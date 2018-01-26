import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './HugeHeroSection.scss';
import mascot from './dragon.png';

class HugeHeroSection extends React.Component {
  render() {
    return (
      <section className={s.container}>
        <div className={s.content}>
          <div className={s.tagline}>
            <h1>
              Blockchain<br />Business Magic&trade;
            </h1>
            <p>
              Be a part of the most secure, flexible, and business ready
              blockchain platform, and ecosystem.
            </p>
          </div>
          <div className={s.mascot}>
            <img src={mascot} alt="mascot" />
          </div>
        </div>
      </section>
    );
  }
}

export default withStyles(s)(HugeHeroSection);
