import React from 'react'
import '../../assets/sass/components/Block.scss'

const Block = ({prefixCls, children}) => (
    <section className={prefixCls}>
      {children}
    </section>
  )


Block.defaultProps = {
  prefixCls: 'block',
  children: null
}

export default Block