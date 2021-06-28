import { useState } from "react";
import { Link } from "react-router-dom";

function Home(){
    const [jugadores, setJugadores] = useState([
        {jugador1:""},
        {jugador2:""}
    ])
    function agregarJugador1(e){
        setJugadores(prevState=>{
            return{
                ...prevState,
                jugador1 : e.target.value
            }
        })
    }
    function agregarJugador2(e){
        setJugadores(prevState=>{
            return{
                ...prevState,
                jugador2 : e.target.value
            }
        })
    }
    return(
        <>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-6 mx-auto">
                        <div className="d-flex justify-content-center">
                            <div className="text-center me-5">
                                <p className="">Ingresa Jugador X</p>
                                <input onChange={(e)=>{
                                    agregarJugador1(e)
                                }} type="text" />
                            </div>
                            <div className="text-center ms-5">
                                <p className="">Ingresa Jugador O</p>
                                <input onChange={(e)=>{
                                    agregarJugador2(e)
                                }} type="text" />
                            </div>
                            
                        </div>
                
                    </div>
            
                </div>
                <div className="row justify-content-center mt-4">
                    <div className="col-3 text-center">
                        <div>
                            <Link className="btn btn-dark" to={"/tablero/"+jugadores.jugador1+"/"+jugadores.jugador2}>Comenzar</Link>
                        </div>
                    </div>
                </div>
                            

            </div>
        </>
        
    )
}

export default Home;