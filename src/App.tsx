import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="p-0 m-0 box-border">
        <h1 className="text-2xl font-bold tracking-tighter text-center">
          Hello World
        </h1>
      </div>
    </>
  );
}

export default App;
