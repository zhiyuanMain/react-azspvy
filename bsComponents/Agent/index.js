import React from 'react'
import { connect } from 'react-redux'
import { Block, Icon, ScrollView } from '../../components'
import Item from './Item'
import { concatAgentList, deleteRowItemById, setRequestingStatus } from '../../actions/agentWorkflow'
import { generateDataByTotal } from '../../mock/agentList'
import '../../assets/sass/bsComponents/Agent.scss'


class Agent extends React.Component {
  constructor(props) {
    super(props)
  }

  // 加载更多
  handleConcatList = () => {
    this.props.concatAgentList(generateDataByTotal(10))
  }

  // delete
  handleDelete = (rowId, itemIndex) => {
    this.props.deleteRowItemById(rowId, itemIndex).then(() => {
      this.props.setRequestingStatus(false)
    })
  }
  renderList = () => {
    const { prefixCls, list } = this.props
    return (
      <React.Fragment>
        {
          list.map((item, index) => (
            <Item 
              key={item.id}
              index={index}
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
    const { prefixCls, list, isLoading  } = this.props

    return (
      <div className={prefixCls}>
        <ScrollView
          isLoading={isLoading}
          isEnded={list.length > 60}
          onPullDownCallback={this.handleConcatList}
        >
           {this.renderList()}
        </ScrollView>
      </div>
    )
  }
}

Agent.defaultProps = {
  prefixCls: 'bs-agent',
  list: []
}

const mapStateToProps = ({ agentWorkflow }) => ({
  isLoading: agentWorkflow.isLoading,
  list: agentWorkflow.list
})

const mapDispatchToProps = dispatch => ({
  concatAgentList: list => dispatch(concatAgentList({list})),
  deleteRowItemById: (rowId, itemIndex) => dispatch(deleteRowItemById({rowId, itemIndex})),
  setRequestingStatus: (isLoading) => dispatch(setRequestingStatus({isLoading}))
})


export default connect(mapStateToProps, mapDispatchToProps)(Agent)