import React from 'react'
import { Block } from '../../components'
import User from '../User'
import '../../assets/sass/bsComponents/Header.scss'


class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  renderTitle = () => {
    const { prefixCls } = this.props

    return <h5 className={`${prefixCls}__title`}>MANAGE</h5>
  }

  renderUser = () => {
    const { prefixCls } = this.props

    return <div className={`${prefixCls}__user`}><User /></div>
  }

  render() {
    const { prefixCls } = this.props
    return (
      <Block>
        <header className={prefixCls}>
          {this.renderTitle()}
          {this.renderUser()}
        </header>
      </Block>
    )
  }
}


Header.defaultProps = {
  prefixCls: 'bs-header'
}

export default Header