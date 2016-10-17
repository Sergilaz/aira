import React, { PropTypes } from 'react'
import _ from 'lodash'

const Form = (props) => {
  const {
    fields,
    handleSubmit,
    error,
    submitting,
    labels,
    placeholders
  } = props

  return (
    <form onSubmit={handleSubmit}>
      {Object.keys(fields).map((name, index) => {
        const field = fields[name]
        return (
          <div key={index} className="form-group">
            <span className="control-label">{labels[index]}</span>
            <div>
              <input
                type="text"
                className="form-control"
                placeholder={(_.has(placeholders, index)) ? placeholders[index] : ''}
                {...field}
              />
            </div>
            {field.touched && field.error ? field.error : ''}
          </div>
        )
      })}
      <div className="form-group">
        <div className="text-center">
          <input
            type="submit"
            className="btn btn-default"
            disabled={submitting}
            value={submitting ? '...' : 'Send transaction'}
          />
        </div>
      </div>
      {error && <div>{error}</div>}
    </form>
  )
}

Form.propTypes = {
  labels: PropTypes.array.isRequired,
  placeholders: PropTypes.array
}
Form.defaultProps = {
  placeholders: []
};

export default Form
