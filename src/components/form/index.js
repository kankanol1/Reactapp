/**
 * Created by kankan on 2019/8/22.
 * E-mail: lidainzhong@gl-data.com
 * To: More pain, more gain.
 */

import React from 'react';
import FormO from './formO';
import FormT from './formT';

import './index.css';

class FormInput extends React.Component {

  render() {
    return (
      <div className="form-input">
        <h3>表单</h3>
        <FormO />
        <FormT />
      </div>
    )
  }
}

export default FormInput;
