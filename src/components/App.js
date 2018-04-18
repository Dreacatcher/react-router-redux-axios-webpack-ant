import React from 'react'
import Demo from 'COMPONENT/demo/'

let DevTools
if (__DEV__ && __COMPONENT_DEVTOOLS__) {
  // 组件形式的 Redux DevTools
  DevTools = require('COMPONENT/DevTools').default
}

const App = ({ children, location }) => (
  <div>
    <Demo />
    <div className="container">
      {/* 相当于 Vue Demo 中的根 router-view */}
      { children }
    </div>

    { DevTools && <DevTools /> }
  </div>
)
export default App
