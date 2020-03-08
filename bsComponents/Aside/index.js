import React from 'react'
import { connect } from 'react-redux'
import { Block, Icon } from '../../components'
import { setMenuKey } from '../../actions/aside'
import '../../assets/sass/bsComponents/Aside.scss'



class Aside extends React.Component {
  constructor(props) {
    super(props)
  }

  handleChangeActiveMenu = id => {
    this.props.setMenuKey(id)
  }

  renderMenu = () => {
    const { prefixCls, menuData, activeMenuKey } = this.props

    return (
      <ul className={`${prefixCls}__menu`}>
          {
            menuData.map(item => { 
              const { id, text, icon } = item
              const wrapCls = `${prefixCls}__menu__item ${id === activeMenuKey ? 'active' : ''}`
              return (
                <li 
                  key={id}
                  className={wrapCls}
                  onClick={() => this.handleChangeActiveMenu(id)}
                >
                  <a href="#">
                    <Icon
                      iconClass={icon}
                      size="20px"
                      color="#fff"
                    />
                    <span>{text}</span>
                  </a>
                </li>
              ) 
            })
          }
      </ul> 
    )
  }

  renderHistory = () => {
    const { prefixCls, historyData } = this.props
    const wrapPrefixCls = `${prefixCls}__history`
    return (
      <div className={wrapPrefixCls}>
        <h6 className={`${wrapPrefixCls}__title`}>History</h6>
        <ul className={`${wrapPrefixCls}__list`}>
            {
              historyData.map(item => { 
                const { id, text, href } = item
                return (
                  <li 
                    key={id}
                    className={`${wrapPrefixCls}__list__item`}
                  >
                    <a href={href}>
                      {text}
                    </a>
                  </li>
                ) 
              })
            }
        </ul>
      </div> 
    )
  }

  render() {
    const { prefixCls  } = this.props

    return (
      <aside className={prefixCls}>
        {this.renderMenu()}
        {this.renderHistory()}
      </aside>
    )
  }
}

Aside.defaultProps = {
  prefixCls: 'bs-aside'
}

const mapStateToProps = ({ aside }) => ({
  activeMenuKey: aside.activeMenuKey,
  menuData: aside.menuData,
  historyData: aside.historyData
})

const mapDispatchToProps = dispatch => ({
  setMenuKey: menuKey => dispatch(setMenuKey({menuKey}))
})


export default connect(mapStateToProps, mapDispatchToProps)(Aside)