import React from 'react';

import Option from './Option';

const Options = (props) => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">Your Options</h3>
      <button
        onClick={props.handleDeleteOptions}
        disabled={props.options.length < 1}
        className="button button--link"
      >
        Remove All
      </button>
    </div>
    {props.options.length === 0 && <p className="widget__message">Please add a option to get started!</p>}
    <div>
      {
        props.options.map((option, index) => (
          <Option
            option={option}
            key={index}
            count={index + 1}
            handleDeleteOption={props.handleDeleteOption}
          />
        ))
      }
    </div>
  </div>
)

export default Options;
