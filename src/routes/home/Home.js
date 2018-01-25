/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import ThreeColumnSection from '../../components/ThreeColumnSection';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <ThreeColumnSection />
      </div>
    );
  }
}

// export default withStyles(style)(Home);
export default Home;
