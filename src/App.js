import React, { useState } from "react";
import Tablero from "./tablero"
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css"
import BotonReset from "./botonReset";
import Ganador from "./Ganador";
import Inicio from "./inicio";
import { FaHome } from "react-icons/fa"
import { Link } from "react-router-dom";




function App({match, ...props}){
    const {nombre1,nombre2} = match.params;
    console.log(nombre1);
    const [state,setState] = useState({
        tablero : [
            " "," "," ",
            " "," "," ",
            " "," "," "
        ],
        turno : "",
        ganador : null,
        jugador1 : nombre1,
        jugador2 : nombre2
    });

    let resetButton = function(){
        setState({
            ...state,
        tablero : [
            " "," "," ",
            " "," "," ",
            " "," "," "
        ],
        turno : "",
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

    function ocultarInicio(){
        if(state.turno !== ""){
            return "oculto"
        }
    }

    function handleChange(e){
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
    }

    function parteX(){
        setState({
            ...state,
            turno : "x"
        })
    }
    function parteO(){
        setState({
            ...state,
            turno : "o"
        })
    }
    function armarTablero(valor){
        if(valor ===1){
            return "t1"
        }else if(valor ===3){
            return "t3"
        }else if(valor === 4){
            return "t4"
        }else if(valor === 5){
            return "t5"
        }else if(valor === 7){
            return "t7"
        }
    }

    return(
        <>
            <div className="container text-center">
                <h1>Tik Tak Toe <span>
                <Link to="/" ><FaHome/></Link>
                </span></h1>
                
                <Inicio handleChange={handleChange}
                player1 = {state.jugador1}
                player2 = {state.jugador2}
                btnX ={parteX}
                btnO ={parteO}
                claseExtra={ocultarInicio()}
                />
                <Ganador nombre={(state.ganador==="x")?state.jugador1:state.jugador2} 
                clase={siHayGanador()} esto={state.ganador}/>
                <BotonReset funcion={resetButton}/>
                {state.tablero.map((value,index)=>{
                    return(
                    <Tablero  valor={value} key={index}
                    loc={index}
                    actualizarTablero={actualizarTablero}
                    turn={state.turno}
                    claseExtra={ocutlarDiv()}
                    claseTablero={armarTablero(index)}
                    />
                    
                    
                    )
                })}
                
            </div>
            
    
        
        
        </>
    )
}

export default App;