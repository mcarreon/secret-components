# Write-Up

Most color values (and a couple other values) are saved as constants under assets/styles/_constants so theming can be quickly changed. I did not use typescript for the sake of time as I am not as familiar with writing typescript. However, I did use React's built in propTypes for type-checking.

To style the dropdown, I used an overlayed div to catch all the events and handle focus state on the actual select as well as event listeners to deal with clicking inside and outside of the element.

## Button

Button accepts the following props:

```javascript
{
  // inner text
  text: (string),
  
  // custom inner element
  child: (element),

  // can be left empty to use (button 2) or 
  // select between light (button 3), dark (button 3), lightAlt (button 4), darkAlt (button 4), danger (button 5)
  color: (string), 

  // set true to allow for full width button (assuming it takes 100% width)
  wide: (bool),

  // set true to show for the add icon
  add: (book),

  // extra classes you want to add to the button
  className: (string),

  // functionality handler
  onClick: (func)

  // any html button attributes can be passed as props to the button
}
```

## Dropdown

Dropdown accepts the following props:

```javascript
{
  // set to true to enable dark mode
  dark: (bool),

  // list of values to use as option value and text
  options: (array),

  // can insert your own options element, or mapped array of elements
  // this will override the options array
  // this also disables value functionality for the dropdown, and moves value tracking to the parent element
  customOptions: (element) or (array),

  // this field is required if customOptions are supplied and controls the value and text of the select
  // the variable supplied to this field should be linked to change based on which customOption is clicked 
  customValue: (int) or (string),

  // defaults to true, disable or enable label
  label: (bool),

  // config object for the label
  labelConfig: {
    // label text
    labelTitle: (string),

    // not implmented yet, but would turn the label inline
    labelInline: (bool),

    // any html label attricutes can be passed ass props to the select
  },

  // required: the initial value/text for the dropdown
  initialValue: (int) or (string),
  
  // any additional classes you would like to add
  className: (string),

  // any html select attricutes can be passed ass props to the select
}
```

## Improvementsp

I would like to go back and add more options to the dropdown to add props/classes to the listbox component, as well as create the inline functionality for the label.

I would also like to test out the custom value/options set in Dropdown a bit more, as the implementation I used was added last second.

Currently traveling, but I also realized I had not made the Dropdown listbox absolutely positioned. The Dropdown listbox is spatially positioned correctly but the scss needs to be changed to absolute positioning to take it out of the document flow and the positional properties to match its current blocked position. 
