import './App.css'
import { FileExplorer, type Root } from './FileExplorer'

const rootExample: Root = [
  {
    name: 'Folder 0',
    items: [
      { name: 'File 0' },
      { name: 'File 1' },
      { name: 'File 2' },
      { name: 'Folder 4', items:[
        { name: 'File 6' },
        { name: 'File 7' },
        { name: 'File 8' },
      ] },

    ]
  },
  {
    name: 'Folder 1',
    items: []
  },
  {
    name: 'Folder 3',
    items: [
      
      { name: 'File 5' },
      { name: 'File 6' },
    ]
  },
  { name: 'File 3' },
  { name: 'File 4' },
]

function App() {
  return (
    <>
    <h1>File Explorer</h1>
    <div>
      <FileExplorer root={rootExample} />
    </div>
    </>
  )
}

export default App
