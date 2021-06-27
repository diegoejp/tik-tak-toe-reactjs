import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter,Route} from "react-router-dom"

function Navegador(){
    return(
        <>
        <BrowserRouter>
            <Route exact path="/app" component={App}/>
        </BrowserRouter>
        </>
    )
}


ReactDOM.render(<Navegador/>,document.querySelector("#root"));


















