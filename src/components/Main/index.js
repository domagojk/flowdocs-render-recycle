import React from 'react'
import Diagram from '../Diagram-WebCola'
import graphData from './graphdata'
import * as actionCreators from '../../actions'

function App () {
  return {
    actions (sources) {
      return [
        sources.select(Diagram)
          .allActions()
          .do(console.log)
      ]
    },

    view () {
      return (
        <Diagram {...actionCreators} graphData={graphData} />
      )
    }
  }
}

export default App
