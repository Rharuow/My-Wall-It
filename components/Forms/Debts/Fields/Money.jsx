import React from 'react'
import PropTypes from 'prop-types'
import CurrencyInput from 'react-currency-input';

const Money = ({ value, onChange, disabled = false, className, divClassName, labelClassName, labelText, inputRef }) => {
  console.log(inputRef)
  return (
    <div className={`form-group ${divClassName ? divClassName : ""}`}>
      {
        labelText &&
        <label htmlFor={inputRef} className={labelClassName}>{labelText}</label>
      }
      {
        <div className="input-group">
          <CurrencyInput value={value} prefix="R$ " ref={inputRef} disabled={disabled} className={`form-control ${className}`} decimalSeparator="," thousandSeparator="." onChangeEvent={onChange} />
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
