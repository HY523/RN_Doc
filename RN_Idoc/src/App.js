import React, { Component} from 'react'

import AppRouter from './containers/Routes'
//import Camera from './components/cameraRoll'
export default class App extends Component {
  /**
   * Render
   *
   * @return {jsx} Render <Provider /> component
   */
  render () {
    return (
      <AppRouter />
    )
  }
}
