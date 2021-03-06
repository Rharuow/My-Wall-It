import React from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'

const SelectField = ({
  isMulti = false,
  components,
  divClassName,
  labelText,
  labelClassName,
  onChange,
  options,
  placeholder,
  name,
  className,
  closeMenuOnSelect = true,
  styles
}) => {
  return (
    <div className={`form-group ${divClassName ? divClassName : ""}`}>
      {
        labelText &&
        <label htmlFor={name} className={`form-label ${labelClassName ? labelClassName : ""}`}>{labelText}</label>
      }
      <Select
        onChange={onChange}
        options={options}
        placeholder={placeholder}
        name={name}
        id={name}
        className={className}
        isMulti={isMulti}
        components={components}
        closeMenuOnSelect={closeMenuOnSelect}
        styles={styles}
      />

    </div>
  )
}

SelectField.propTypes = {
  divClassName: PropTypes.string,
  labelText: PropTypes.string,
  labelClassName: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.array,
  placeholder: PropTypes.string,
  ref: PropTypes.object,
  className: PropTypes.string,
  isMulti: PropTypes.bool,
  closeMenuOnSelect: PropTypes.bool
}

export default SelectField
