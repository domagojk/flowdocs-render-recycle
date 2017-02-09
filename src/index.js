import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/Main'
import Recycle from 'recyclejs'

ReactDOM.render(
  <Recycle root={App} />,
  document.getElementById('root')
)
