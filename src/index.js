import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainQuiz from "./components/MainQuiz";
import StudentLogin from "./components/studentLogin";

//import "./style.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<StudentLogin/>}/>
        </Routes>
    </div>
  );
}
ReactDOM.render(
<BrowserRouter>
<App />
</BrowserRouter>,
document.getElementById('root'));
