import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import "./Dropdown.scss";

const Dropdown = (props) => {
  const {
    className,
    options,
    customOptions,
    dark = false,
    label = true,
    labelConfig = {},
    initialSelection,
    initialValue,
    ...spreadableProps
  } = props;

  // add event listener to toggle dropdown
  useEffect(() => {
    document.addEventListener("click", checkClick, false);

    return () => {
      document.removeEventListener("click", checkClick);
    };
  }, []);

  // updates listbox ref to stop staleness
  useEffect(() => {
    listboxOpenRef.current = listboxOpen
  })

  const [listboxOpen, setListboxOpen] = useState(false);

  const selectRef = useRef(null);
  const eventRef = useRef(null);
  const optionRef = useRef(null);
  const listboxOpenRef = useRef(listboxOpen)

  const classes = clsx(
    {
      "dropdown-light": !dark,
      "dropdown-dark": dark,
      dropdown: true,
    },
    className
  );

  const helperClasses = clsx({
    "dropdown-light": !dark,
    "dropdown-dark": dark,
    active: listboxOpen,
    "event-catcher": true,
  });

  const toggleListbox = () => {
    if (listboxOpen === true) {
      setListboxOpen(false)
    } else {
      selectRef.current.focus();
      setListboxOpen(true);
    }
  };

  // checks where the click happened and toggles listbox off depending on click location
  const checkClick = (e) => {
    if (selectRef !== null) {
      if (
        e.target !== selectRef.current && e.target !== eventRef.current && 
        listboxOpenRef.current
      ) {
        setListboxOpen(false);
      }
    }
  };

  // handles option clicks
  const handleOption = (e) => {
    optionRef.current.innerHTML = e.target.value;
    optionRef.current.value = e.target.value;
  };

  return (
    <div className="dropdown-container">
      {label ? <Label labelConfig={labelConfig} /> : <></>}
      <div className="dropdown">
        <select
          className={classes}
          ref={selectRef}
          {...spreadableProps}
        >
          <option value={initialValue} ref={optionRef}>{initialValue}</option>
        </select>
        <div className={helperClasses} onClick={() => toggleListbox()} ref={eventRef}/>
        <Listbox
          active={listboxOpen}
          options={options}
          customOptions={customOptions}
          dark={dark}
          handleOption={handleOption}
        />
      </div>
    </div>
  );
};

const Label = (props) => {
  const {
    labelTitle,
    labelInline = false,
    className,
    ...spreadableLabelProps
  } = props.labelConfig;

  const labelClasses = clsx(
    {
      "inline": labelInline,
      "dropdown": true,
    },
    className
  );

  return (
    <label className={labelClasses} {...spreadableLabelProps}>
      {labelTitle}
    </label>
  );
};

const Listbox = (props) => {
  const { active, customOptions, options, dark, handleOption } = props;

  const classes = clsx({
    "listbox-light": !dark,
    "listbox-dark": dark,
    "active": active,
    "listbox": true,
  });

  const optionsMap = options.map((option, key) => {
    return (
      <option value={option} key={key} onClick={(e) => handleOption(e)}>
        {option}
      </option>
    );
  });

  return (
    <div className={classes}>
      {customOptions == null ? optionsMap : customOptions}
    </div>
  );
};

Dropdown.propTypes = {
  dark: PropTypes.bool,
  options: PropTypes.array,
  customOptions: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.elementType,
    PropTypes.array,
  ]),
  label: PropTypes.bool,
  labelConfig: PropTypes.shape({
    labelTitle: PropTypes.string,
    labelInline: PropTypes.bool,
  }),
  initialValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  className: PropTypes.string,
};

export default Dropdown;
