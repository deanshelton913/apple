/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import classNames from 'classnames';
import s from './Register.scss';

class Register extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      dob: {
        valid: true,
        startDate: moment(),
      },
    };
  }

  handleDobChange = date => {
    const dob = {};
    if (moment(date).isValid()) {
      dob.startDate = date;
    } else {
      dob.valid = false;
    }
    this.setState({ dob });
  };

  render() {
    return (
      <div>
        <div>
          <h1>{this.props.title}</h1>
          <input type="text" className="username" />
          <DatePicker
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            maxDate={moment()}
            minDate={moment().subtract(100, 'years')}
            className={classNames('dob', { invalid: !this.state.dob.valid })}
            selected={this.state.dob.startDate}
            dateFormat="MM/DD/YYYY"
            onChange={this.handleDobChange}
          />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Register);
