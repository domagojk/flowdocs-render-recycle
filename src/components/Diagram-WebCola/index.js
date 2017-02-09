import React from 'react'
import WebCola from './WebCola'

function DiagramWebcola (props) {
  const { onNodeSelected, onLineSelected, onGroupSelected } = props

  return {
    actions (sources) {
      return [
        sources.select(WebCola)
          .on('onNodeClick')
          .map(onNodeSelected),

        sources.select(WebCola)
          .on('onLineClick')
          .map(onLineSelected),

        sources.select(WebCola)
          .on('onGroupClick')
          .map(onGroupSelected)
      ]
    },

    view (props) {
      return (
        <WebCola
          graphData={props.graphData}
          onNodeClick={e => e}
          onLineClick={e => e}
          onGroupClick={e => e}
        />
      )
    }
  }
}

export default DiagramWebcola
