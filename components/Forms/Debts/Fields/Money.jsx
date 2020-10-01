import React from 'react'
import PropTypes from 'prop-types'
import CurrencyInput from 'react-currency-input'

const Money = ({ value, onChange, disabled = false, className, divClassName, labelClassName, labelText, name }) => {
  return (
    <div className={`form-group ${divClassName ? divClassName : ""}`}>
      {
        labelText &&
        <label htmlFor={name} className={`form-label ${labelClassName ? labelClassName : ""}`}>{labelText}</label>
      }
      {
        <div className="input-group">
          <CurrencyInput value={value ? value : 0} prefix="R$ " name={name} id={name} disabled={disabled} className={`form-control text-center${className ? className : ""}`} decimalSeparator="," thousandSeparator="." onChange={onChange} />
        </div>
      }
    </div>
  )
}

Money.propTypes = {
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
  divClassName: PropTypes.string,
  labelClassName: PropTypes.string,
  name: PropTypes.string,
  labelText: PropTypes.string,
  disabled: PropTypes.bool,
}

export default Money
