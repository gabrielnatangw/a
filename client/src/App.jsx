import { useEffect, useState } from 'react'
import axios from "axios"
function App() {
  const [node, setNode] = useState(0)

  useEffect(()=>{
    axios.get('http://localhost:3000/')
    .then(el=>{
      setNode(el.data.ip ?? 0)
    })
  },[])

  return (
    <div
      style={{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        width:'100vw',
        height:'100vh',
        textAlign:'center'
      }}
    > 
      NODE IP: {0}
    </div>
  )
}

export default App
