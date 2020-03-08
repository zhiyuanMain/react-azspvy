import React from 'react'
import { Block, Icon, Badge, Btn } from '../../components'

class Item extends React.Component {
  constructor(props) {
    super(props)
  }

  renderImg = () => {
    const { prefixCls, img } = this.props
    const wrapCls = `${prefixCls}__img`
    
    return (
      <span className={wrapCls}>
        <Icon iconClass={img} size="80px" />
      </span>
    )
  }

  renderInfo = () => {
    const { prefixCls } = this.props
    const wrapCls = `${prefixCls}__info`
    
    return (
      <div className={wrapCls}>
        {this.renderHeader()}
        {this.renderActionRow()}
      </div>
    )
  }

  renderHeader = () => {
    const { prefixCls, id, type, realAddress, localAddress, folderAddress, badge } = this.props
    const wrapCls = `${prefixCls}__info__header`

    return (
      <dl className={wrapCls}>
        <dt>
          <Icon iconClass="icon-meetingover" size="26px" />
          <span>{realAddress}</span>
          <Badge
            type={type == 0 ? 'warning' : 'success'}
          >{badge}</Badge>
        </dt>
        <dd>
          <Icon iconClass="icon-prompt" size="26px" />
          <span>{localAddress}</span>
        </dd>
        <dd>
          <Icon iconClass="icon-bookresource" size="26px" />
          <span>{folderAddress}***{id}</span>
        </dd>
      </dl>
    )
  }

  renderActionRow = () => {
    const { prefixCls, list, deny, id, onDelete } = this.props
    const wrapCls = `${prefixCls}__info__actions` 

    return (
      <div className={wrapCls}>
        <span className={`${wrapCls}__add`}>
          <Btn>
            <Icon iconClass="icon-increase" size="16px" />
          </Btn>
        </span>
        <ul className={`${wrapCls}__list`}>
          {
            list.map((item, index) => (
              <li key={`${item}_${index}`}>
                <Badge
                  type="default"
                >
                  {item}
                  <span onClick={() => onDelete(id, index)}>
                    <Icon iconClass="icon-delete" size="14px" />
                  </span>
                </Badge>
              </li>
            ))
          }
        </ul>
        <span className={`${wrapCls}__deny`}>
          { deny ? (
            <Btn disabled>
            <Icon iconClass="icon-refuse" size="16px"  />
              Deny
          </Btn>
          ) : null}
        </span>
      </div>
    )
  }

  render() {
    const { prefixCls } = this.props

    return (
      <div className={prefixCls}>
        {this.renderImg()}
        {this.renderInfo()}
      </div>
    )
  }
}


Item.defaultProps = {
  id: '',
  type: 0,
  badge: '',
  img: '',
  realAddress: '',
  localAddress: '',
  folderAddress: '',
  list: [],
  deny: false
}

export default Item