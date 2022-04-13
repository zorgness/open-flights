import React from "react";
import ReactDom from "react-dom/client";
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import App from "./App";

class Index extends React.Component {
    render() {
        return (
           
            
                <BrowserRouter>
                    <Routes>     
                        <Route path="*" element={<App />}></Route>
                    </Routes>
                </BrowserRouter>
           
           
            
           
            
        )
    }
}

const root = ReactDom.createRoot(document.getElementById("root"))

root.render(<Index />)