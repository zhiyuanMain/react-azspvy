import React from 'react'

export default (WrappedComponent) => {
  return class WrappingComponent extends React.Component {
    constructor(props) {
      super(props)
    }

    state = {
      isOpened: false
    }

    refWrappedComponent = null

    initRef = e => this.refWrappedComponent = e

    componentDidMount() {
      document.addEventListener('click', this.handleClick)
    }

    componentWillUnmount() {
      document.removeEventListener('click', this.handleClick)
    }

    handleClick = e => {
      if(this.refWrappedComponent && this.refWrappedComponent.refWithClickOutside) {
        const isCurrentNodeClicked = this.refWrappedComponent.refWithClickOutside.contains(e.target)
        if(isCurrentNodeClicked) {
          this.setState(prevState => ({
            isOpened: !prevState.isOpened
          }))
        }else {
          this.setState({
            isOpened: false
          })
        }
        
      }
    }

    handleWrappedClick = currentOpenedStatus => {
      this.setState({
        isOpened: currentOpenedStatus
      })
    }

    render() {
      return (
        <WrappedComponent 
          ref={this.initRef} 
          isOpened={this.state.isOpened}
        />
      )
    }
  }
}