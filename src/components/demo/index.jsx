import React, { Component } from 'react'
import './index.less'
export default class LogoutDropdown extends Component {
  componentWillMount() {
  }
  render() {
    console.log('__PUBDATAS__')
    console.log(typeof __PUBDATAS__)
    return (
      <div className="demo">
        demo
      </div>
    )
  }
}
