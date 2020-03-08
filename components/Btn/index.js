import React from 'react'
import '../../assets/sass/components/Btn.scss'

const Btn = ({prefixCls, type, size, disabled, children, ...rest}) => {
  const typeCls = `${prefixCls}-${type}`
  const sizeCls = `${prefixCls}-${size}`
  const disabledCls = disabled ? `${prefixCls}-disabled` : ''
  const wrapCls = `${prefixCls} ${typeCls} ${sizeCls} ${disabledCls}`
  return (
      <span
        className={wrapCls}
        {...rest}
      >
        {children}
      </span>
  )
}


Btn.defaultProps = {
  prefixCls: 'btn',
  children: null,
  type: 'primary',
  size: 'middle',
  disabled: false
}

export default Btn