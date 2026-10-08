import Box from '../shapes/box'
import Circle from '../shapes/circle'
import Triangle from '../shapes/triangle'
import type { Shape } from '../../types/Shape'
import type { CSSProperties } from 'react'

function ShapeCanvas({shapes}: {shapes: Shape[]}){
    const canvasStyles: CSSProperties = {
        display:'flex',
        flexWrap:'wrap',
        justifyContent:'center',
        alignItems:'center',
        gap: '20px',
        width: '100%',
        height: '100%',
    }
    return (
      <div id="canvas"
      style={canvasStyles}
      >
        {shapes.map((shape, index) => {
          if(shape.type === 'box'){
            return <Box key={index} />
          } else if(shape.type === 'circle'){
            return <Circle key={index} />
          } else if(shape.type === 'triangle'){
            return <Triangle key={index} />
          }
          return null
        })}
      </div>
    )
  }

export default ShapeCanvas;