import React from "react";
import { Home } from "./Components/Home/Home";
import "./App.css";
import "./index.css";
function App() {
  return (
    <div className="container flex flex-col justify-center text-center max-w-3xl mx-auto w-screen h-screen">
      <main className="h-4/5 shadow-2xl flex flex-col">
        <header className="flex-shrink-0">
          <h1 className="text-3xl text-white bg-gradient-to-r to-blue-500 via-red-300  from-yellow-400 py-3 text-center">
            <span className="italic px-5">Gramophone.JS</span>
            💽
          </h1>
        </header>
        <Home />
      </main>
    </div>
  );
}

export default App;
