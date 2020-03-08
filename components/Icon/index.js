import React from 'react'
import '../../assets/sass/components/Icon.scss'

const Icon = ({
  prefixCls, 
  size,
  color,
  iconClass
}) => (
    <svg 
      style={{ fontSize: size, color }}
      className="svg-icon" 
      aria-hidden="true"
    >
      <use xlinkHref={`#${iconClass}`} />
    </svg>
)


Icon.defaultProps = {
  prefixCls: 'svg-icon',
  size: '12px',
  color: '#000'
}

export default Icon