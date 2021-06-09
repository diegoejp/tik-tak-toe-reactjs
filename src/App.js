import React, { useState } from "react";
import Tablero from "./tablero"
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css"
import BotonReset from "./botonReset";
import Ganador from "./Ganador";




function App(){
    const [state,setState] = useState({
        tablero : [
            " "," "," ",
            " "," "," ",
            " "," "," "
        ],
        turno : "x",
        ganador : null
    });

    let resetButton = function(){
        setState({
        tablero : [
            " "," "," ",
            " "," "," ",
            " "," "," "
        ],
        turno : "x",
        ganador : null
    });
    }

    function actualizarTablero(loc,player){
        console.log("funciona");
        if(state.tablero[loc] === "x" || state.tablero[loc]==="o" || (state.ganador)){
            //No se puede ya hay una pieza ahi.... :)
            return;
        }
        let actualTablero = state.tablero;
        actualTablero.splice(loc,1,state.turno)
        setState((prevState)=>{
            return{
                ...prevState,
                tablero : actualTablero
            }
        })
        let columnaArriba = state.tablero[0] + state.tablero[1] + state.tablero[2];
        if(columnaArriba.match(/xxx|ooo/)){
            setState((prevState) =>{
                return{
                    ...prevState,
                    ganador : state.turno
                }
            });
            return;
        }
        let columnaMedio = state.tablero[3] + state.tablero[4] + state.tablero[5];
        if(columnaMedio.match(/xxx|ooo/)){
            setState((prevState) =>{
                return{
                    ...prevState,
                    ganador : state.turno
                }
            });
            return;
        }
        let columnaAbajo = state.tablero[6] + state.tablero[7] + state.tablero[8];
        if(columnaAbajo.match(/xxx|ooo/)){
            setState((prevState) =>{
                return{
                    ...prevState,
                    ganador : state.turno
                }
            });
            return;
        }
        let columnaCruzadaI = state.tablero[0] + state.tablero[4] + state.tablero[8];
        if(columnaCruzadaI.match(/xxx|ooo/)){
            setState((prevState) =>{
                return{
                    ...prevState,
                    ganador : state.turno
                }
            });
            return;
        }
        let columnaCruzadaD = state.tablero[2] + state.tablero[4] + state.tablero[6];
        if(columnaCruzadaD.match(/xxx|ooo/)){
            setState((prevState) =>{
                return{
                    ...prevState,
                    ganador : state.turno
                }
            });
            return;
        }
        let filaI = state.tablero[0] + state.tablero[3] + state.tablero[6];
        if(filaI.match(/xxx|ooo/)){
            setState((prevState) =>{
                return{
                    ...prevState,
                    ganador : state.turno
                }
            });
            return;
        }
        let filaM = state.tablero[1] + state.tablero[4] + state.tablero[7];
        if(filaM.match(/xxx|ooo/)){
            setState((prevState) =>{
                return{
                    ...prevState,
                    ganador : state.turno
                }
            });
            return;
        }
        let filaD = state.tablero[2] + state.tablero[5] + state.tablero[8];
        if(filaD.match(/xxx|ooo/)){
            setState((prevState) =>{
                return{
                    ...prevState,
                    ganador : state.turno
                }
            });
            return;
        }
        //empate
        let movimientos = state.tablero.join("").replace(/ /g, "");
        if(movimientos.length===9){
            setState((prevState)=>{
                return{
                    ...prevState,
                    ganador : "Empate"
                }
            });
        }
        if(state.turno==="x"){
            setState((prevState)=>{
                return{
                    ...prevState,
                    turno : "o"
                }
            });
        }else{
            setState((prevState)=>{
                return{
                    ...prevState,
                    turno : "x"
                }
            });
        }


    }

    function siHayGanador(){
        if(state.ganador==="x"){
            
        }else if(state.ganador==="o"){
            
        }else if(state.ganador==="Empate"){

        }else{
            return "oculto"
        }
    }

    function ocutlarDiv(){
        if(state.ganador !== null){
            return "oculto"
        }
    }

    return(
        <>
            <div className="container text-center">
                <h1>Tik Tak Toe</h1>
                <Ganador nombre={state.ganador} clase={siHayGanador()} esto={state.ganador}/>
                <BotonReset funcion={resetButton}/>
                {state.tablero.map((value,index)=>{
                    return(
                    <Tablero  valor={value} key={index}
                    loc={index}
                    actualizarTablero={actualizarTablero}
                    turn={state.turno}
                    claseExtra={ocutlarDiv()}
                    />
                    
                    
                    )
                })}
                
            </div>
            
    
        
        
        </>
    )
}

export default App;