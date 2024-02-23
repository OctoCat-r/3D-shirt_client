import { useState } from "react";
import { HomePage, Customize } from "./pages";
import Canvas from "./canvas";

function App() {
  return (
    <>
      <main className="app transition-all ease-in">
        <HomePage />
        <Canvas />
        <Customize />
      </main>
    </>
  );
}

export default App;
