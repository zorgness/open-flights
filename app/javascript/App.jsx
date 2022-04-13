import React from "react";
import { Route, Routes } from "react-router-dom";
import Airlines from "./components/Airlines/Airlines";
import Airline from "./components/Airline/Airline";

const App = () => {
    return(
            <Routes>
                <Route exact path="/" element={<Airlines />}></Route>
                <Route exact path="/airlines/:slug" element={<Airline />}></Route>
            </Routes>
        
    )
}

export default App