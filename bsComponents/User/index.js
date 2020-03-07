import React from 'react'
import { Icon } from '../../components'
import '../../assets/sass/bsComponents/Header.scss'


class User extends React.Component {
  constructor(props) {
    super(props)
  }

  renderAvatar = () => {
    const { prefixCls } = this.props

    return <span className={`${prefixCls}__title`}><Icon iconClass="icon-angle-down" /></span>
  }

  renderUser = () => {
    const { prefixCls } = this.props

    return <div className={`${prefixCls}__user`}>MANAGE</div>
  }

  render() {
    const { prefixCls } = this.props
    return (
      <section className={prefixCls}>
        {this.renderAvatar()}
        {this.renderUser()}
      </section>
    )
  }
}


User.defaultProps = {
  prefixCls: 'bs-user'
}

export default User