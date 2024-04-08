import "./styles/utilities.css";
import "./styles/colors.css";
import Login from "./pages/Login";
import Register from "./pages/Register";


import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/signup" element={<Register/>}/>




     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
