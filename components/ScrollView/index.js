import React from 'react'
import { throttle } from '../../utils'
import '../../assets/sass/components/ScrollView.scss'

class ScrollView extends React.Component {
  constructor(props) {
    super(props)
  }

  refWrapper = null

  initRef = e => this.refWrapper = e

  componentDidMount() {
      this.refWrapper && this.refWrapper.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    this.refWrapper && this.refWrapper.removeEventListener('scroll', this.handleScroll)
  }


  handleScroll = e => {
    if(this.props.isEnded) return
    const panel = this.refWrapper
    let minScroll = 0;
    let scrollTop = panel.scrollTop;
    let maxScroll = panel.scrollHeight - panel.offsetHeight;
    if(scrollTop >= maxScroll){
        throttle(this.props.onPullDownCallback)()
        return false;
    }
    if(scrollTop <= 0){
        return false;
    }
  }

  

  render() {
    const { prefixCls, children, isLoading, isEnded } = this.props
    console.log(111, isLoading)

    return (
      <div ref={this.initRef} className={prefixCls}>
        {children}
        { !isEnded && isLoading && <p className={`${prefixCls}__text`}>正在加载中...</p>}
        { isEnded && <p className={`${prefixCls}__text`}>没有更多数据了</p>}
      </div>
    )
  }
}


ScrollView.defaultProps = {
  prefixCls: 'scroll-view',
  children: null,
  scrollType: 'vertical',
  isLoading: false,
  isEnded: false,
  onPullDownCallback: () => {}
}

export default ScrollView