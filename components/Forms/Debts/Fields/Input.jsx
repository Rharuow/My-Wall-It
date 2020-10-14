import React from 'react'
import PropTypes from 'prop-types'

const Input = ({
  type,
  name,
  labelText,
  divClassName,
  labelClassName,
  placeholder,
  inputClassName,
  onChange,
  value,
  min,
  max,
  disabled = false
}) => {
  return (
    <div className={`${divClassName ? divClassName : "form-group"}`}>
      {
        labelText &&
        <label htmlFor={name} className={`form-label ${labelClassName ? labelClassName : ""}`}>{labelText}</label>
      }
      <input min={min ? min : ""} max={max ? max : ""} disabled={disabled} className={`form-control text-center ${inputClassName ? inputClassName : ""}`} onChange={onChange} name={name} id={name} type={type ? type : "text"} value={value ? value : ""} placeholder={placeholder} />
    </div>
  )
}

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  labelText: PropTypes.string,
  placeholder: PropTypes.string,
  divClassName: PropTypes.string,
  labelClassName: PropTypes.string,
  inputClassName: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  min: PropTypes.string,
  max: PropTypes.string,
  disabled: PropTypes.bool,
}

export default Input
