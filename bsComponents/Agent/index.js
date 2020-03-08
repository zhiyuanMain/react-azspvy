import React from 'react'
import { connect } from 'react-redux'
import { Block, Icon } from '../../components'
import Item from './Item'
import { setMenuKey } from '../../actions/aside'
import '../../assets/sass/bsComponents/Agent.scss'



class Agent extends React.Component {
  constructor(props) {
    super(props)
  }

  renderList = () => {
    const { prefixCls, list } = this.props
    return (
      <Item 
        prefixCls={`${prefixCls}__box`}
      />
    )
  }


  render() {
    const { prefixCls  } = this.props

    return (
      <div className={prefixCls}>
        {this.renderList()}
      </div>
    )
  }
}

Agent.defaultProps = {
  prefixCls: 'bs-agent'
}

const mapStateToProps = ({ aside }) => ({
  activeMenuKey: aside.activeMenuKey,
  menuData: aside.menuData,
  historyData: aside.historyData
})

const mapDispatchToProps = dispatch => ({
  setMenuKey: menuKey => dispatch(setMenuKey({menuKey}))
})


export default connect(mapStateToProps, mapDispatchToProps)(Agent)