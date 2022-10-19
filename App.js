import React from "react";
import './styles/App.css';
import {BrowserRouter,Routes, Route} from "react-router-dom";
import About from "./pages/About";


function App() {
    return (

    <Routes>
        <Route path="/about" element={<About/>} >
            <About/>
        </Route>
    </Routes>


    )
}

export default App;
