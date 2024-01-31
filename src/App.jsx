import { useEffect, useState } from "react";
import { garlary } from "./gallary";

function App() {
  const [data, setData] = useState([]);
  const [collection, setCalletion] = useState([]);
  useEffect(() => {
    setData(garlary);
    setCalletion([...new Set(garlary.map((item)=> item.title))]);
    
  }, []);
  
 const garlary_filter=(itemdata)=>{
  const filterdata = garlary.filter((item)=> item.title == itemdata)
  setData(filterdata)
 }
  return (
    <>
      <div className="galeryrepper">
      <div className="filter">
        <ul>
          <li><button onClick={()=> setData(garlary)}>ALL</button></li>
          {
            collection.map((item)=> <li><button onClick={()=> garlary_filter(item)}>{item}</button></li>)
          }
        </ul>
      </div>
        <div className="galarycontainer">
          {data.map((item) => (
            <div key={item.id}  className="item">
              <img src={item.img}  />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
