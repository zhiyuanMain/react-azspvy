import React from 'react'
import { connect } from 'react-redux'
import { Block, Icon, ScrollView, ConfirmModal, Input } from '../../components'
import Item from './Item'
import { concatAgentList, deleteRowItemById, concatAgentItems, setRequestingStatus } from '../../actions/agentWorkflow'
import { generateDataByTotal } from '../../mock/agentList'
import '../../assets/sass/bsComponents/Agent.scss'


const INIT_CONFIMMODALPROPS = {
  visible: false,
  okText: 'Add Resource',
  cancelText: 'Cancel'
}

const INIT_OPERATEROWINFO = {
  id: '',
  resources: []
}
class Agent extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    operateRowInfo: {
      ...INIT_OPERATEROWINFO
    },
    confimModalProps: {
      ...INIT_CONFIMMODALPROPS
    }
  }

  // 添加资源相关处理函数
  handleModalCancel = () => {
    console.log('cancel')
    this.setState(prevState => ({
      operateRowInfo: {
        ...INIT_OPERATEROWINFO
      },
      confimModalProps: {
        ...INIT_CONFIMMODALPROPS
      }
    }))
  }

  handleModalOk = () => {
    const { operateRowInfo } = this.state
    console.log(operateRowInfo)

    if(!operateRowInfo.resources.length) {
      alert('Please add at least one item')
      return
    }else {
      console.log(111, operateRowInfo.id)
      this.props.concatAgentItems(operateRowInfo.id, operateRowInfo.resources.filter(s => s && s.trim())).then(() => {
        console.log('success')
        this.handleModalCancel()
      })
    }
  }

  // 改变值
  handleChangeResources = value => {
    this.setState(prevState => ({
      operateRowInfo: {
        ...prevState.operateRowInfo,
        resources: value.split(',')
      }
    }))
  }
  // 加载更多
  handleConcatList = () => {
    // 每次加载10条，超过60条停止加载
    this.props.concatAgentList(generateDataByTotal(10)).then(() => {
      this.props.setRequestingStatus(false)
    })
  }

  // 删除项目
  handleDelete = (rowId, itemIndex) => {
    this.props.deleteRowItemById(rowId, itemIndex)
  }
  // 点击添加项目
  handleAdd = rowId => {
    this.setState(prevState => ({
      operateRowInfo: {
        ...INIT_OPERATEROWINFO,
        id: rowId
      },
      confimModalProps: {
        ...INIT_CONFIMMODALPROPS,
        visible: true
      }
    }))
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
              onAdd={this.handleAdd}
            />
          ))
        }
      </React.Fragment>
    )
  }

  renderModalBody = () => {
    const { prefixCls, list } = this.props
    const { operateRowInfo } = this.state
    const wrapCls = `${prefixCls}__modal`
    return (
      <div>
        <p>Separate mulitiple resource name with commas</p>
        <Input 
          placeholder="please input sth" 
          value={operateRowInfo.resources.join(',')}
          onChange={this.handleChangeResources}
        />
      </div>
    )
  }


  render() {
    const { prefixCls, list, isLoading  } = this.props
    const { confimModalProps } = this.state

    return (
      <div className={prefixCls}>
        <ScrollView
          isLoading={isLoading}
          isEnded={list.length > 60}
          onPullDownCallback={this.handleConcatList}
        >
           {this.renderList()}
        </ScrollView>
        <ConfirmModal
          {...confimModalProps}
          renderBody={this.renderModalBody}
          onCancel={this.handleModalCancel}
          onOk={this.handleModalOk}
        />
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
  concatAgentItems: (rowId, items) => dispatch(concatAgentItems({rowId, items})),
  setRequestingStatus: (isLoading) => dispatch(setRequestingStatus({isLoading}))
})


export default connect(mapStateToProps, mapDispatchToProps)(Agent)