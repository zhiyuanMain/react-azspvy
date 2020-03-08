import React from 'react'
import '../../assets/sass/components/Input.scss'

const Input = ({
  prefixCls, 
  onChange,
  ...rest
}) => (
    <input className={prefixCls} {...rest} onChange={e => onChange(e.target.value)} />
)


Input.defaultProps = {
  prefixCls: 'input'
}

export default Input