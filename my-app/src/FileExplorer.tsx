import { useState } from "react"
import { CaretDown, CaretUp, FileIcon, FolderIcon } from "./Icons";

type File = {
  name: string;
}

type MixedFileFolder = (File|Folder)

type Folder = File & {
  items: MixedFileFolder[]
}
export type Root = MixedFileFolder[]

const Folder = ({ name, items }: Folder) => {
  const [expanded, setExpanded] = useState(false)

  return <div className='folder' >
    <span style={{display: 'flex', alignItems: 'center'}}><FolderIcon />{name}
    <button onClick={() => {setExpanded((e) => !e)}}>{expanded ? <CaretDown /> : <CaretUp />}</button></span>


    {expanded && (
      <div style={{marginLeft: '1rem'}}>
        {items.map((item) => <TreeItem key={item.name} item={item} />)}
      </div>
    )}
  </div>
}
const File = ({name}: File) => {
  return <div className='file'>
    <span style={{display: 'flex', alignItems: 'center'}}><FileIcon /> {name}</span>
  </div>
}

const TreeItem = ({ item }: { item: MixedFileFolder }) => {
  if ("items" in item) {
    return <Folder {...item} />
  }
  return <File {...item} />
}

export const FileExplorer = ({ root }: { root: Root }) => {
  return root.map((item) => <TreeItem key={item.name} item={item} />)
}

export default FileExplorer