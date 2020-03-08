import React from 'react'
import Icon from '../Icon'
import Btn from '../Btn'
import '../../assets/sass/components/ConfirmModal.scss'

class ConfirmModal extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    wrapperStyles: {}
  }

  refWrapper = null
  initRefWrapper = e => this.refWrapper = e

  // 由于时间关系
  // 用个投机取巧的办法确定位置，其实应该做成toolTip（另外一种实现方法）
  // 存在一个bug: 页面滚动时，位置需要进行进一步处理。。。
  componentDidUpdate(prevProps) {
    if (prevProps.currentRef !== this.props.currentRef) {
      this.handleResetPosition(this.props.currentRef)
    }
  }

  // 重置位置
  handleResetPosition = currentNode => {
    if(!this.props.visible) {
      return
    }
    this.reference = currentNode
    const templateHeight = this.refWrapper.offsetHeight;
    const reftop = this.reference.getBoundingClientRect().top;
    const refheight = this.reference.offsetHeight;
    // 微调防止出现卷入下方现象
    const ifBeBlocked = templateHeight > document.body.clientHeight - reftop - 40;
    const realTop = !ifBeBlocked ? 
                    reftop + 40 + 'px' :
                    reftop - refheight - templateHeight + 'px';
    this.refWrapper.classList[ifBeBlocked ? 'add' : 'remove']('be-blocked');
    //微调位置
    // debugger
    const leftOrright = this.props.leftOrright === 'right' ? 'right' : 'left';
    const resPosition = {
        top: realTop,
    };
    const smallWidth =  50;
    resPosition[leftOrright] = this.reference.getBoundingClientRect()[leftOrright] - smallWidth + 'px';
    this.setState({
      wrapperStyles: resPosition
    })
  }



  renderInner = () => {
    const { prefixCls } = this.props
    const wrapCls = `${prefixCls}__inner`

    return (
      <div className={wrapCls}>
        {this.renderInnerHeader()}
        {this.renderInnerBody()}
        {this.renderInnerFooter()}
      </div> 
    )
  }

  renderInnerHeader = () => {
    const { prefixCls, title, onCancel } = this.props
    const wrapCls = `${prefixCls}__inner__header`

    return (
      <header className={wrapCls}>
        <h1>{title}</h1>
        <span className={`${wrapCls}__close`} onClick={onCancel}>
          <Icon
            iconClass="icon-increase"
            size="16px"
          />
        </span>
      </header>
    )
  }

  renderInnerBody = () => {
    const { prefixCls, renderBody } = this.props
    const wrapCls = `${prefixCls}__inner__body`

    return (
      <div className={wrapCls}>
        {renderBody()}
      </div>
    )
  }

  renderInnerFooter = () => {
    const { prefixCls, title, onOk, onCancel, okText, cancelText } = this.props
    const wrapCls = `${prefixCls}__inner__footer`

    return (
      <footer className={wrapCls}>
        <Btn onClick={onOk}>{okText}</Btn>
        <Btn type="default" onClick={onCancel}>{cancelText}</Btn>
      </footer>
    )
  }

  render() {
    const { prefixCls, visible } = this.props
    const { wrapperStyles } = this.state
    return (
      <div 
        className={prefixCls}
        ref={this.initRefWrapper}
        style={{
          ...wrapperStyles,
          display: `${visible? 'block' : 'none'}`
        }}
      >
        {this.renderInner()}
      </div>
    )
  }
}


ConfirmModal.defaultProps = {
  prefixCls: 'confirm-modal',
  children: null,
  currentRef: null,
  visible: false,
  title: '',
  okText: 'ok',
  cancelText: 'cancel',
  onOk: () => {},
  onCancel: () => {},
  renderBody: () => null
}
export default ConfirmModal