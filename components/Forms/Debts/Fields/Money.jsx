import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import CurrencyInput from 'react-currency-input';

const Money = ({ value, onChange, className, divClassName, labelClassName, inputRef, labelText }) => {
  return (
    <div className={`${divClassName}`}>
      {
        labelText &&
        <label htmlFor={inputRef} className={labelClassName}>{labelText}</label>
      }
      <div className="input-group">
        <CurrencyInput value={value ? value : "0,00"} prefix="R$ " ref={inputRef} className={`form-control ${className}`} decimalSeparator="," thousandSeparator="." onChangeEvent={onChange} />
      </div>
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
  labelText: PropTypes.string
}

export default Money
