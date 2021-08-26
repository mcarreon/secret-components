import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import "./Dropdown.scss";

const Dropdown = (props) => {
  const {
    className,
    options,
    customOptions,
    dark,
    label = true,
    labelConfig = {},
    ...spreadableProps
  } = props;

  const {
    labelTitle,
    labelInline = false,
    className: labelClassName,
  } = labelConfig;

  const classes = clsx(
    {
      "dropdown-light": true,
      "dropdown-dark": dark,
    },
    className
  );

  const labelClasses = clsx(
    {
      labelInline: labelInline,
    },
    labelClassName
  );

  const labelEl = <label className={labelClasses}>{labelTitle}</label>;

  const optionsMap = options.map((option, key) => {
    return (
      <option value={option} key={key}>
        {option}
      </option>
    );
  });

  return (
    <>
      {label ? labelEl : <></>}
      <select className={classes} {...spreadableProps}>
        {customOptions == null ? optionsMap : customOptions}
      </select>
    </>
  );
};

Dropdown.propTypes = {
  className: PropTypes.string,
  dark: PropTypes.bool,
  options: PropTypes.array,
  customOptions: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.elementType,
  ]),
  label: PropTypes.bool,
  labelConfig: PropTypes.shape({
    labelTitle: PropTypes.string,
    labelInline: PropTypes.bool,
  }),
};

export default Dropdown;
