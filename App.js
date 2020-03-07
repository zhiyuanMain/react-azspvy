import React from 'react'
import { Layout } from './components'
import { BsHeader, BsFooter } from './bsComponents'
import './assets/sass/index.scss'


export default class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Layout
        Header={<BsHeader />}
        Footer={<BsFooter />}
      />
    )
  }
}

