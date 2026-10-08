import { useState } from 'react'
import NavMenu from './components/menus/NavMenu'
import CreateMenu from './components/menus/CreateMenu'
import './App.css'
import ShapeCanvas from './components/windows/ShapesCanvas'
import type { Shape } from './types/Shape'


function App() {
  const [count, setCount] = useState(0)
  const [shapes, setShapes] = useState<Shape[]>([])

  const addShape = (shape: string) => {
    const newShape = {type: shape, element:null}
    setShapes([...shapes, newShape])
  }

  const removeShape = (index: number) => {
    const newShapes = shapes.filter((_, i) => i !== index)
    setShapes(newShapes)
  }

  return (
    <>
      <NavMenu />
      <section id="app-wrapper">
        <div>
          <h1>Software 9000</h1>
          <p>Built with React.</p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>

        <ShapeCanvas shapes={shapes} removeShape={removeShape} />
      </section> 
      <CreateMenu addShape={addShape} />
    </>
  )
}

export default App
