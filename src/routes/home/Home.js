/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div>
        <article className="content">
          <header className="header-block typography">
            <h1>How Sass can shape the future of&nbsp;CSS</h1>

            <p>
              The rise in popularity of CSS extensions, such as Sass, in recent
              years has not gone unnoticed by the people who work on proposing
              and standardizing modules for CSS3 (and CSS4).
            </p>
          </header>

          <div className="typography">
            <h2>Sass features being adapted for submission</h2>

            <p>
              Many of the key features found in Sass are being adapted for
              submission to the W3C.{' '}
              <a href="http://www.xanthir.com/blog/b49w0">
                Variables, Mixins, and Nesting are all mooted for inclusion in
                CSS
              </a>, and we may see some of them appear in the near future.
            </p>

            <p>
              Then again, we may not; resistance to the proposals is quite
              strong from certain members - for example,{' '}
              <a href="http://www.w3.org/People/Bos/">Bert Bos</a> wrote a long
              article on{' '}
              <a href="http://www.w3.org/People/Bos/CSS-variables">
                why he considers CSS Variables to be harmful
              </a>. But I thought it would be interesting for the Sass community
              to see how the software to which you develop and contribute to
              (Sass) is being used to discuss the future of the web.
            </p>

            <h2>The Variables proposal</h2>
            <p>
              This proposal should look very familiar to you - it’s the same
              syntax that Sass uses, with one addition. Each variable is defined
              using a three-part syntax: first you set up the declaration using
              the <code>@var</code> at-rule, then you provide a unique name with
              the <code>$</code> character before it, then you set the value:
            </p>

            <pre>@var $foo #F00;</pre>

            <p>
              Once set up like this, you can reference your variable by using
              the unique name as a value:
            </p>

            <p>
              <a href="http://www.xanthir.com/blog/b4AD0">
                This proposal has already been put forward to the W3C
              </a>, and I’ll tell you the result of that shortly.
            </p>

            <h2>The Mixins proposal</h2>
            <p>
              As with Variables, you should be very familiar with the Mixins
              proposal - the syntax used in Sass was the inspiration. You create
              a declaration block using the @mixin at-rule, assign a unique id,
              and then add your rules:
            </p>

            <pre>@mixin foo {}</pre>

            <p>
              When you need to use that code block you call it using the @mix
              directive and the unique id you previously assigned:
            </p>

            <pre>h1 {}</pre>

            <p>
              As you can see, the only difference is that the CSS proposal uses
              @mix in place of Sass’s @include. As with Sass, you can also use
              parameters with Mixins:
            </p>

            <pre>
              @mixin foo($bar #F00) {}
              h1 {}
            </pre>

            <h2>An alternative variables syntax</h2>

            <p>
              Recently,{' '}
              <a href="http://lists.w3.org/Archives/Public/www-style/2011Oct/0699.html">
                an alternative syntax for Variables has been proposed
              </a>. This syntax looks and acts somewhat similarly to the HTML
              data attribute, although it’s not the same. In this proposal
              variables are scoped to elements (for global scope, you’d use the
              :root selector) and the variable name is prefixed with data-:
            </p>

            <pre>:root {}</pre>

            <p>
              Then you reference the variable by using the unique name in the
              data function:
            </p>

            <pre>h1 {}</pre>

            <p>
              This has the advantage of allowing scoped variables, and
              integrating better with the{' '}
              <a href="http://dev.w3.org/csswg/cssom/">CSSOM</a>, JavaScript, as
              well as inspector tools like{' '}
              <a href="https://getfirebug.com/">Firebug</a> or{' '}
              <a href="http://www.opera.com/dragonfly/">Dragonfly</a>.
            </p>

            <p>
              It must be stressed, however, that this is still only at the
              discussion stage.
            </p>

            <h2>So when will we see them?</h2>
            <p>
              As I said, maybe never. As I understand it, the first Variables
              proposal was not well received by the W3C - but the module author,{' '}
              <a href="https://twitter.com/#!/tabatkins">Tab Atkins</a>, is
              continuing to refine it anyway. Tab is also key to the creation of
              the alternative syntax. You can follow along with Tab and his
              writing at his personal blog where he shares his thoughts on web
              standards as well as details surrounding discussions on the future
              of CSS.
            </p>

            <p>
              As for Mixins, they were rejected out of hand and probably won’t
              be pursued. The reason given? Lack of use cases. But I can’t
              imagine that you, as Sass creators, developers and users are short
              of use cases for Mixins. So, if you have them I’d love to read
              them - please leave a comment below sharing your thoughts if
              that’s the case.
            </p>

            <p>
              If work does continue on these proposals, or any part of them, I
              think that it would be a matter of little time before browsers
              started to implement them; I believe, in fact, that{' '}
              <a href="http://www.webkit.org/">WebKit</a> already implemented
              Variables, only to remove them after feedback from the{' '}
              <a href="http://www.w3.org/">W3C</a>.
            </p>

            <h2>Conclusion</h2>
            <p>
              I have to confess that I’ve only briefly experimented with Sass,
              and have not used it in any production websites, but what I like
              about it is the ease with which it’s been possible to adapt the
              syntax into CSS itself. It’s great to see community-created
              language extensions influence the evolution of the web, and even
              if none of these proposals ever make it to the implementation
              stage, you can be sure that <b>at the very least</b> they form
              part of the standards conversation.
            </p>

            <h2>Links</h2>
            <ol>
              <li>
                <a
                  href="http://www.xanthir.com/blog/b49w0"
                  className="link external"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSSOM, Vars, Mixins, Nesting, and Modules
                </a>
              </li>
              <li>
                <a
                  href="http://www.w3.org/People/Bos/CSS-variables"
                  className="link external"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Why “variables” in CSS are harmful
                </a>
              </li>
              <li>
                <a
                  href="http://www.xanthir.com/blog/b4AD0"
                  className="link external"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Variables Draft
                </a>
              </li>
              <li>
                <a
                  href="http://lists.w3.org/Archives/Public/www-style/2011Oct/0699.html"
                  className="link external"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Better Variables through Custom Properties from Tab Atkins Jr.
                  on 2011-10-24
                </a>
              </li>
            </ol>
          </div>

          <footer className="author-block typeset">
            <h2>The Author, Peter Gasston</h2>

            <p>
              <a href="https://www.petergasston.co.uk/">Peter Gasston</a> works
              as a developer at <a href="http://top10.com/">Top10</a> and codes
              mainly client-side languages (although he’s familiar with
              server-side as well). Peter is a keen advocate of open web
              standards, is the author of{' '}
              <a href="http://nostarch.com/css3.htm">
                <i>
                  The Book of CSS3: A Developer’s Guide to the Future of Web
                  Design
                </i>
              </a>{' '}
              (released May 2011), and has written for .Net magazine and{' '}
              <a href="http://www.css3.info/">CSS3.info</a>.
            </p>

            <p>
              Peter blogs on technical issues at{' '}
              <a href="http://www.broken-links.com/">Broken-Links.com</a>, has
              spoken at <a href="http://ignitelondon.net/">Ignite London</a> as
              well as various other web development meetings, and can often be
              found under the user name of ‘stopsatgreen’ (clever anagram).
            </p>

            <p>
              Connect with Peter on Twitter at{' '}
              <a href="https://twitter.com/#!/stopsatgreen">@stopsatgreen</a>{' '}
              and{' '}
              <a href="http://lanyrd.com/profile/stopsatgreen/">Lanyrd.com</a>.
            </p>
          </footer>
        </article>
      </div>
    );
  }
}

// export default withStyles(style)(Home);
export default Home;
