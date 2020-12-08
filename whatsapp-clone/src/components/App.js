import React from "react";
import "../styles/App.css";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="app bg-red-400 w-screen h-screen grid grid-rows-1 items-center justify-center">
      <div className="app__body flex bg-gray-300 shadow-md">
        <Sidebar />
        {/* Chat */}
      </div>
    </div>
  );
}

export default App;
