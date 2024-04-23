import "./App.css";
import {  RouterProvider } from "react-router-dom";
import routers from "./routing/MainRoute";
function App() {
  return (
    <div className="App px-4 py-3 mx-auto">
      <RouterProvider router={routers} fallbackElement={"loading..."}/>
    </div>
  );
}

export default App;


