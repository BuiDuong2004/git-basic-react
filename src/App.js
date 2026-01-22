import { useState } from "react";

function App() {
  const [msg, setMsg] = useState("");

  return (
    <div>
      <button onClick={() => setMsg("xin chào")}>
        Xin chào
      </button>

      <p>{msg}</p>
    </div>
  );
}

export default App;
