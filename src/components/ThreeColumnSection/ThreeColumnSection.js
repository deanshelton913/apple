import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ThreeColumnSection.scss';

class ThreeColumnSection extends React.Component {
  render() {
    return (
      <section className={s.container}>
        <div className={s.content}>
          <article>
            <i className="fa fa-users" aria-hidden="true" />
            <div>
              <h1>Banana</h1>
              <p>
                DIY hot chicken activated charcoal helvetica paleo prism
                fingerstache chia drinking vinegar. Next level fanny pack ramps,
                flannel vaporware hammock pitchfork before they sold out.
              </p>
              whatever
            </div>
          </article>
          <article>
            <i className="fa fa-address-book" aria-hidden="true" />
            <div>
              <h1>Potato</h1>
              <p>
                Kitsch af semiotics ennui blue bottle prism small batch vice
                coloring book palo santo. Next level truffaut butcher photo
                booth, roof party fingerstache bushwick
              </p>
              other stuff
            </div>
          </article>
          <article>
            <i className="fa fa-connectdevelop" aria-hidden="true" />
            <div>
              <h1>Apple</h1>
              <p>
                Wolf tbh everyday carry cred. Pinterest coloring book austin,
                godard ennui vegan prism portland literally synth +1 seitan
                microdosing. Tumblr PBR&B pitchfork retro disrupt man bun kogi
                etsy vaporware
              </p>
              Damnit gary
            </div>
          </article>
        </div>
      </section>
    );
  }
}

export default withStyles(s)(ThreeColumnSection);
