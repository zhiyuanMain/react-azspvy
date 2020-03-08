import React from 'react'
import { connect } from 'react-redux'
import { Block, Icon } from '../../components'
import Item from './Item'
import { concatAgentList, deleteRowItemById } from '../../actions/agentWorkflow'
import '../../assets/sass/bsComponents/Agent.scss'


class Agent extends React.Component {
  constructor(props) {
    super(props)
  }

  // delete
  handleDelete = (rowId, itemIndex) => {
    this.props.deleteRowItemById(rowId, itemIndex)
  }
  renderList = () => {
    const { prefixCls, list } = this.props
    return (
      <React.Fragment>
        {
          list.map(item => (
            <Item 
              key={item.id}
              prefixCls={`${prefixCls}__box`}
              {...item}
              onDelete={this.handleDelete}
            />
          ))
        }
      </React.Fragment>
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
  prefixCls: 'bs-agent',
  list: []
}

const mapStateToProps = ({ agentWorkflow }) => ({
  list: agentWorkflow.list
})

const mapDispatchToProps = dispatch => ({
  concatAgentList: list => dispatch(concatAgentList({list})),
  deleteRowItemById: (rowId, itemIndex) => dispatch(deleteRowItemById({rowId, itemIndex}))
})


export default connect(mapStateToProps, mapDispatchToProps)(Agent)