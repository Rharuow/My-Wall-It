import React from 'react'
import PropTypes from 'prop-types'

const Select = ({ className, classNameOptions, onChange, id, labelText, options, selected }) => {
  return (
    <>
      {
        labelText &&
        <label htmlFor={id}>{labelText}</label>
      }
      <select className={`form-control ${className}`} onChange={(e) => onChange(e)} id={id}>
        {
          options.map(opt => <option className={classNameOptions} key={opt.value}>{opt.name}</option>)
        }
      </select>
    </>
  )
}

Select.propTypes = {
  className: PropTypes.string,
  classNameOptions: PropTypes.string,
  onChange: PropTypes.func,
  id: PropTypes.string,
  labelText: PropTypes.string,
  options: PropTypes.array,
  selected: PropTypes.bool,
}

export default Select
