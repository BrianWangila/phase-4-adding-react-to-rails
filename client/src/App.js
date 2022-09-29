import React, { useEffect } from "react";


function App() {


  useEffect(() => {
    fetch("/movies")
    .then((resp) => resp.json())
    .then((movies) => console.log(movies))
  }, [])

  return (
    <div>
      <h1>Hello from React!</h1>
    </div>
  );
}

export default App;
