import React from 'react'
import PropTypes from 'prop-types'

const DateField = ({ date, onChange, divClassName, labelClassName, labelText, name }) => {
  return (
    <div className={`form-group ${divClassName ? divClassName : ""}`}>
      {
        labelText &&
        <label htmlFor={name} className={`form-label ${labelClassName ? labelClassName : ""}`}>{labelText}</label>
      }
      <input type="date" className="form-control text-center" value={date} onChange={onChange} />
    </div>
  )
}

DateField.propTypes = {
  date: PropTypes.string,
  onChange: PropTypes.func,
  divClassName: PropTypes.string,
  labelClassName: PropTypes.string,
  labelText: PropTypes.string,
  name: PropTypes.string
}

export default DateField
