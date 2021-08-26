import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import "./Dropdown.scss";

const Dropdown = (props) => {
  const {className, dark, options, label, labelTitle, labelInline} = props;

  const classes = clsx({
    "dropdown-light": true,
    "dropdown-dark": dark,
  }, className);

  return (
    <div>
      <label>{labelTitle}</label>
      <select className={classes} {...props}></select>
    </div>
  );
};

Dropdown.propTypes = {
  className: PropTypes.string,
  dark: PropTypes.bool,
  options: PropTypes.array,
  label: PropTypes.string,
  labelTitle: PropTypes.string,
  labelInline: PropTypes.bool
};

export default Dropdown;
