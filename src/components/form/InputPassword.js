import React, { Component } from 'react';
import Eye from 'images/eye.svg';

class InputPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
    };
  }

  togglePassword = () => {
    this.setState((prevState) => ({
      showPassword: !prevState.showPassword,
    }));
  };

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
        <div
          className={`flex jusitfy-between border border-solid bg-white border-teal-500 overflow-hidden rounded ${className}`}
        >
          <input
            className="p-1 flex-1"
            id={id}
            type={this.state.showPassword ? 'text' : 'password'}
            {...other}
          />
          <button type="button" onClick={this.togglePassword} className="pr-1">
            <img src={Eye} alt="toggle password visibilty" />
          </button>
        </div>
      </div>
    );
  }
}

export default InputPassword;
