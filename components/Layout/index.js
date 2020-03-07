import React from 'react'
import '../../assets/sass/components/Layout.scss'

const Layout = ({
  prefixCls, 
  Header, 
  Footer,
  children
}) => (
    <div className={prefixCls}>
      <div className={`${prefixCls}__header`}>
        {Header}
      </div>
      <div className={`${prefixCls}__body`}>
        {children}
      </div>
      <div className={`${prefixCls}__footer`}>
        {Footer}
      </div>
    </div>
  )


Layout.defaultProps = {
  prefixCls: 'layout',
  Header: null,
  Footer: null,
  children: null
}

export default Layout