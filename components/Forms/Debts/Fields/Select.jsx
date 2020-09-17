import React from 'react'
import PropTypes from 'prop-types'

const Select = ({ className, classNameOptions, onChange, refInput, labelText, options }) => {
  return (
    <>
      {
        labelText &&
        <label htmlFor={refInput}>{labelText}</label>
      }
      <select className={`form-control ${className}`} defaultValue="disabled" onChange={onChange} ref={refInput}>
        <option value="disabled" disabled>Escolha o tipo de dívida</option>
        {
          options.map(opt => <option className={classNameOptions} value={opt.value} key={opt.value}>{opt.name}</option>)
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
}

export default Select
