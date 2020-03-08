import React from 'react'
import Icon from '../Icon'
import Btn from '../Btn'
import '../../assets/sass/components/ConfirmModal.scss'

class ConfirmModal extends React.Component {
  constructor(props) {
    super(props)
  }

  refWrapper = null
  initRefWrapper = e => this.refWrapper = e

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
    return (
      <div 
        className={prefixCls}
        ref={this.initRefWrapper}
        style={{
          display: `${visible ? 'block' : 'none'}`
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
  visible: false,
  title: '',
  okText: 'ok',
  cancelText: 'cancel',
  onOk: () => {},
  onCancel: () => {},
  renderBody: () => null
}
const ConfirmModal1 = () => <span>1</span>
export default ConfirmModal