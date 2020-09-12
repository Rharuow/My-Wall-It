import React from 'react'
import PropTypes from 'prop-types'

import { debtName } from '../../assets/scripts/utils/translate'

const Form = ({ params }) => {
  return (
    <form action="">
      <div className="form-group">
        <label htmlFor="exampleFormControlSelect1">Selecione um tipo de dívida:</label>
        <select className="form-control" id="exampleFormControlSelect1">
          {params.map((param, index) => <option key={`option${index}`}>{debtName(param.title)}</option>)}
        </select>
      </div>
    </form>
  )
}

Form.propTypes = {
  params: PropTypes.array
}

export default Form
