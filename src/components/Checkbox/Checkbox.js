import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./styles.css";

class Checkbox extends PureComponent {
  static propTypes = {
    /** Whether or not the checkbox is checked. */
    isChecked: PropTypes.bool,

    /** Whether or not the checkbox is disabled. */
    isDisabled: PropTypes.bool,

    /**
     * Optional function called when the user changes the checked state.
     * If this function is not null then the component becomes controlled
     * and will not manage its own state.
     *
     * @param {string|number}  value  The value of the checkbox being changed.
     * @param {boolean}  isChecked  Whether the checkbox is checked.
     */
    onChange: PropTypes.func,

    /** The checkboxs value. */
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),

    /** Optional class name passed to the checkbox. */
    className: PropTypes.string,

    /** Text string of label with the checkbox. */
    label: PropTypes.string
  };

  static defaultProps = {
    isDisabled: false,
    onChange: null,
    value: "",
    className: "",
    label: ""
  };

  static getDerivedStateFromProps({ isChecked }) {
    if (!isChecked) {
      return {};
    }

    return {
      isChecked
    };
  }

  state = {
    isChecked: false
  };

  handleClick = () => {
    const { isChecked } = this.state;
    const { onChange, value, isDisabled } = this.props;

    if (isDisabled) {
      return false;
    }

    if (onChange) {
      onChange(value, !isChecked);
      return;
    }

    this.setState(({ isChecked }) => ({
      isChecked: !isChecked
    }));
  };

  render() {
    const { isChecked } = this.state;
    const { label, className, isDisabled } = this.props;

    return (
      <div
        onClick={this.handleClick}
        className={`
          checkbox
          checkbox--state-${isChecked ? "active" : "inactive"}
          checkbox--type-${isDisabled ? "disabled" : "enabled"}
          ${className}
        `}
      >
        <div className="checkbox__box" />
        {label && (
          <div className="checkbox__label">
            {label}
          </div>
        )}
      </div>
    );
  }
}

export default Checkbox;
