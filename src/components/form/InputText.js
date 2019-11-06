import React, { Component } from 'react';

class InputText extends Component {
  static defaultProps = {
    className: '',
  };

  render() {
    const { id, label, className, ...other } = this.props;
    return (
      <div className="flex flex-col mb-2">
        <label className="pb-1" htmlFor={id}>
          {label}
        </label>
        <input
          className={`border border-solid border-gray-500 rounded p-1 ${className}`}
          id={id}
          type="text"
          {...other}
        />
      </div>
    );
  }
}

export default InputText;
