import React from 'react'
import '../../assets/sass/components/Block.scss'

const Block = ({prefixCls, wrapCls, children, ...rest}) => (
    <section className={`${prefixCls} ${wrapCls}`} {...rest}>
      {children}
    </section>
  )


Block.defaultProps = {
  prefixCls: 'block',
  children: null,
  wrapCls: ''
}

export default Block