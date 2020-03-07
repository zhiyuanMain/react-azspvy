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
    const { prefixCls, isOpened } = this.props
    const wrapCls = `${prefixCls}__arrow ${isOpened ? 'opened' : ''}`

    return (
      <span className={wrapCls}>
        <Icon 
          iconClass="icon-arrow" 
        />
      </span>
    )
  }

  render() {
    const { prefixCls } = this.props

    return (
      <section 
        ref={this.initRef}
        className={prefixCls}
      >
        {this.renderAvatar()}
        {this.renderArrow()}
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