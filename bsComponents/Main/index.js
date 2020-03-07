import React from 'react'
import { Block } from '../../components'
import '../../assets/sass/bsComponents/Main.scss'

const Main = ({prefixCls}) => (
  <Block>
    <section 
      className={prefixCls}
    >© Copyright 2020</section>
  </Block>
)


Main.defaultProps = {
  prefixCls: 'bs-main'
}

export default Main