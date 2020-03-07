import React from 'react'

const Icon = ({
  prefixCls, 
  size,
  color,
  iconClass
}) => (
    <span 
      style={{ fontSize: size, color }} className={`${prefixCls} ${iconClass}`} 
      aria-hidden="true"
    />
)


Icon.defaultProps = {
  prefixCls: 'svg-icon',
  size: '12px',
  color: '#000'
}

export default Icon