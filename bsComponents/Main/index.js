import React from 'react'
import { Block } from '../../components'
import '../../assets/sass/bsComponents/Main.scss'

const Main = ({prefixCls}) => (
  <Block
    wrapCls={`${prefixCls}-section`}
  >
    <section 
      className={prefixCls}
    >
      <div className={`${prefixCls}__aside`}></div>
      <div className={`${prefixCls}__content`}></div>
    </section>
  </Block>
)


Main.defaultProps = {
  prefixCls: 'bs-main'
}

export default Main