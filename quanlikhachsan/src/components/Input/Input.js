import React from 'react'

const Input = ({title,id,type,placeholder}) => {
  return (
    <div className="form-group">
              <label Htmlfor="exampleInputEmail1">{title}</label>
              <input
                type={type}
                className="form-control"
                id={id}
                placeholder={placeholder}
              />
    </div>
  )
}

export default Input