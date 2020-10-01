import React from 'react'
import PropTypes from 'prop-types'

const Money = ({ value, onChange, disabled = false, className, divClassName, labelClassName, labelText, name }) => {
  return (
    <div className={`form-group ${divClassName ? divClassName : ""}`}>
      {
        labelText &&
        <label htmlFor={name} className={`form-label ${labelClassName ? labelClassName : ""}`}>{labelText}</label>
      }
      {
        <div className="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">R$</span>
          </div>
          <input type="number" value={value} name={name} id={name} class="form-control" disabled={disabled} aria-label="Amount (to the nearest Real)" className={`form-control text-center${className ? className : ""}`} onChangeEvent={onChange} />
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
