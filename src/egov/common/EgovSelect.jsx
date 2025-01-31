import React, { useState } from 'react'

const EgovSelect = ({ id, name, title, options, setValue, setter }) => {
  console.log('egovSelect', id, name, title, options, setValue, setter)
  return (
    <select
      id={id}
      name={name}
      title={title}
      // defaultValue={setValue}
      onChange={() => {
        console.log('select Change!! : ', setValue)
        setter(setValue)
      }}
    >
      {options.map((option, i) => {
        const isSelect = option.value == setValue ? 'selected' : ''
        // let isSelect = option.value == setValue;
        return (
          <option key={i} value={option.value} selected={isSelect}>
            {option.label}
          </option>
        )
      })}
    </select>
  )
}

export default EgovSelect
