import React from 'react';

import Option from './Option';

const Options = (props) => (
  <div>
    Options:
        <button
      onClick={props.handleDeleteOptions}
      disabled={props.options.length < 1}>
      Remove All
        </button>
    {props.options.length === 0 && <p>Please add a option to get started!</p>}
    <div>
      {
        props.options.map((option, index) => (
          <Option
            option={option}
            key={index}
            handleDeleteOption={props.handleDeleteOption}
          />
        ))
      }
    </div>
  </div>
)

export default Options;
