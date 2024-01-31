import { useEffect, useState } from "react";
import { garlary } from "./gallary";

function App() {
  const [data, setData] = useState([]);
  const [collection, setCalletion] = useState([]);
  useEffect(() => {
    setData(garlary);
    setCalletion([...new Set(garlary.map((item)=> item.title))]);
    
  }, []);
  
  console.log(collection);
  return (
    <>
      <div className="galeryrepper">
        <div className="galarycontainer">
          {data.map((item) => (
            <div className="item">
              <img src={item.img} key={item.id} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
