import { useState } from "react";
import Card from "./components/Card"

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  let newObj = {
    name: "arun",
    'id' :101
  }

  return (
    <>
      <h1 >Tailwind CSS</h1>
   {/*<Card chaneel = 'code with Arun' try={newObj}/>*/}
   <Card username = 'code with Arun'/>
   <Card/>
 


    </>
  );
}

export default App;
