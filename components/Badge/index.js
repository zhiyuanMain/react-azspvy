import React from 'react'
import '../../assets/sass/components/Badge.scss'

const Badge = ({prefixCls, type, children}) => {
  const wrapCls = `${prefixCls} ${type}`
  return (
      <span
        className={wrapCls}
      >{children}</span>
  )
}


Badge.defaultProps = {
  prefixCls: 'badge',
  children: null,
  type: 'success'
}

export default Badge