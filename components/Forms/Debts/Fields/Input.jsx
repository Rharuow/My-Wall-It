import React, { useRef } from 'react'
import PropTypes from 'prop-types'

const Input = ({
  type,
  inputRef,
  labelText,
  divClassName,
  labelClassName,
  placeholder,
  inputClassName,
  onChange,
  value,
}) => {
  return (
    <div className={`form-group ${divClassName ? divClassName : ""}`}>
      {
        labelText &&
        <label htmlFor={inputRef} className={labelClassName}>{labelText}</label>
      }
      <input className={`form-control ${inputClassName}`} onChange={onChange} ref={inputRef} type={type ? type : "text"} value={value ? value : ""} placeholder={placeholder} />
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
}

export default Input
