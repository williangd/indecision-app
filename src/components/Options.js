import React from 'react';

import Option from './Option';

const Options = (props) => {
  const options = props.options;
  return (
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
          options.map((option, index) => (
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
}

export default Options;