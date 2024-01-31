import { useEffect, useState } from "react"
import { garlary } from "./gallary"

function App() {
  const [data,setData]=useState([]);
  const [collection,setCalletion]=useState([]);
 useEffect(()=>{
  setData(garlary)
 },[])

 console.log(data);
  return (
    <>
      
    </>
  )
}

export default App
