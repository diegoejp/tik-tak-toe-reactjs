import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter,Route} from "react-router-dom"
import Home from "../src/home";


function Navegador(){
    return(
        <>
        <BrowserRouter>
            <Route exact path="/" component={Home}/>
            <Route exact path="/app" component={App}/>
            <Route exact path="/tablero/:nombre1/:nombre2" component={App}/>
        </BrowserRouter>
        </>
    )
}


ReactDOM.render(<Navegador/>,document.querySelector("#root"));


















