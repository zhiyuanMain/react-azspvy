import React from 'react'
import { Block } from '../../components'
import { BsAside } from '../../bsComponents'
import '../../assets/sass/bsComponents/Main.scss'

const Main = ({prefixCls}) => (
  <Block
    wrapCls={`${prefixCls}-section`}
  >
    <section 
      className={prefixCls}
    >
      <div className={`${prefixCls}__aside`}>
        <BsAside />
      </div>
      <div className={`${prefixCls}__content`}>
      12
          <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
          <br></br><br></br><br></br><br></br><br></br>
          <br></br><br></br>2323
          <br></br><br></br><br></br>
          <br></br><br></br><br></br><br></br>
          <br></br><br></br><br></br><br></br>
          <br></br><br></br><br></br><br></br>
          <br></br><br></br><br></br><br></br>
          <br></br><br></br><br></br><br></br>
          <br></br><br></br><br></br><br></br>
          <br></br><br></br><br></br><br></br>
          <br></br><br></br><br></br><br></br>
          <br></br><br></br><br></br><br></br>
          2323
          <br></br><br></br><br></br>
      </div>
    </section>
  </Block>
)


Main.defaultProps = {
  prefixCls: 'bs-main'
}

export default Main