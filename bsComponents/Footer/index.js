import React from 'react'
import { Block } from '../../components'
import '../../assets/sass/bsComponents/Footer.scss'

const Footer = ({prefixCls}) => (
  <Block>
    <footer className={prefixCls}>© Copyright 2020</footer>
  </Block>
)


Footer.defaultProps = {
  prefixCls: 'bs-footer'
}

export default Footer