import React from 'react'
import { Block } from '../../components'

class Item extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { prefixCls } = this.props

    return (
      <div className={prefixCls}>
        
      </div>
    )
  }
}


Item.defaultProps = {
}

export default Item