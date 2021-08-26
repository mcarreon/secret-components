import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import "./Button.scss";

const Button = (props) => {

  const { text, child, color, wide, add, className, onClick, ...spreadableProps} = props;

  const classes = clsx(
    {
      "btn-default": true,
      "btn-light": color === "light",
      "btn-light-alt": color === "lightAlt",
      "btn-dark": color === "dark",
      "btn-dark-alt": color === "darkAlt",
      "btn-danger": color === "danger",
      "icon": add,
      "width-full": wide,
    },
    className
  );

  const addIcon = <span className="add-icon">+</span>

  return (
    <button
      className={classes}
      onClick={onClick}
      {...spreadableProps}
    >
      {add ? addIcon : <></>}
      {child == null ? text : child}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  child: PropTypes.oneOfType([
    PropTypes.element, 
    PropTypes.elementType
  ]),
  color: PropTypes.string,
  wide: PropTypes.bool,
  add: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;
