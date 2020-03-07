import React from 'react'
import { Icon } from '../../components'
import '../../assets/sass/bsComponents/User.scss'


class User extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    isOpened: false   
  }

  handleToggle = () => {
    this.setState(prevState => ({
      isOpened: !prevState.isOpened
    }))
  }

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
    const { isOpened } = this.state
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
      <section className={prefixCls} onClick={this.handleToggle}>
        {this.renderAvatar()}
        {this.renderArrow()}
      </section>
    )
  }
}


User.defaultProps = {
  prefixCls: 'bs-user'
}

export default User