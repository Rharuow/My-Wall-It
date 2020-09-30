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
  ref,
  className,
  closeMenuOnSelect = false,
  styles
}) => {
  return (
    <div className={`form-group ${divClassName ? divClassName : ""}`}>
      {
        labelText &&
        <label htmlFor={ref} className={`form-label ${labelClassName ? labelClassName : ""}`}>{labelText}</label>
      }
      <Select
        onChange={onChange}
        options={options}
        placeholder={placeholder}
        ref={ref}
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
