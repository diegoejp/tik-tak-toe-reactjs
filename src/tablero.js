import React from "react";
import "./tablero.css";

function Tablero(props){


    function tableroClick(){
        props.actualizarTablero(props.loc,props.turn);
    }
    return(
        <div className={"tablero "+props.loc+" "+props.claseExtra}
        onClick={()=>tableroClick(props)}>
            <p className="sinMargen">{props.valor}</p>
        </div>   
    )
}


export default Tablero;