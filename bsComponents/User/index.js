import React from 'react'
import { Icon } from '../../components'
import { WithCickOutside } from '../../hoc'
import '../../assets/sass/bsComponents/User.scss'


class User extends React.Component {
  constructor(props) {
    super(props)
  }

  refWithClickOutside = null

  initRef = e => this.refWithClickOutside = e

  renderAvatar = () => {
    const { prefixCls } = this.props

    return (
      <span className={`${prefixCls}__avatar`}>
        <Icon 
          iconClass="icon-avatar" 
          size="24px"
        />
      </span>
    )
  }

  renderArrow = () => {
    const { prefixCls } = this.props

    return (
      <span className={`${prefixCls}__arrow`}>
        <Icon 
          iconClass="icon-arrow" 
        />
      </span>
    )
  }

  renderMenus = () => {
    const { prefixCls } = this.props

    return (
      <ul className={`${prefixCls}__dropdown`}>
        <li>Profile</li>
        <li>Sign Out</li>
      </ul>
    )
  }

  render() {
    const { prefixCls, isOpened } = this.props
    const wrapCls = `${prefixCls} ${isOpened ? 'opened' : ''}`

    return (
      <section 
        ref={this.initRef}
        className={wrapCls}
      >
        {this.renderAvatar()}
        {this.renderArrow()}
        {this.renderMenus()}
      </section>
    )
  }
}


User.defaultProps = {
  prefixCls: 'bs-user',

  // clickoutside相关
  isOpened: false
}

export default WithCickOutside(User)