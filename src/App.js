import { useState } from "react";

function App() {
  const [msg, setMsg] = useState("");
  const[tambiet,setTambiet]=useState("tạm biệt")  

  return (
    <>
     <div>
      <button onClick={() => setMsg("xin chào")}>
        Xin chào
      </button>
      <p>{msg}</p>
    </div>
      <div>
      <button onClick={() => setTambiet("bye bye")}>
        Tạm biệt
      </button>
      <p>{tambiet}</p>
    </div>
    </>
   
  );
}

export default App;
