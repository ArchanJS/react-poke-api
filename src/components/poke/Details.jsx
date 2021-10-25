import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';

const Details = () => {

    const {id}=useParams();

    const [pokemon,setPokemon]=useState("");

    const getData = async () => {
        try {
            const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
            console.log(data);
            setPokemon(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getData();
    },[])

    return (
        <>
        <div className="container-fluid bg-primary min-vh-100">
        <h1 className="display-3 text-center bold p-4 pa-head py-5">{pokemon?pokemon.name.toUpperCase():null}</h1>
            <div className="card col-lg-6 col-md-6 col-sm-12 col-12 mx-auto">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item text-center bg-dark text-white"><strong className="me-3">Id: </strong> <i>{pokemon?pokemon.id:null}</i> </li>
                    <li className="list-group-item text-center bg-dark text-white"><strong className="me-3">Height: </strong> <i>{pokemon?pokemon.height:null}</i> </li>
                    <li className="list-group-item text-center bg-dark text-white"><strong className="me-3">Weight: </strong> <i>{pokemon?pokemon.weight:null}</i> </li>
                    <li className="list-group-item text-center bg-dark text-white"><strong className="me-3">Abilities: </strong> <i>{pokemon?pokemon.abilities.length:null}</i> </li>
                    <li className="list-group-item text-center bg-dark text-white"><strong className="me-3">Base experience: </strong> <i>{pokemon?pokemon.base_experience:null}</i> </li>
                    <li className="list-group-item text-center bg-dark text-white"><strong className="me-3">Moves: </strong> <i>{pokemon?pokemon.moves.length:null}</i> </li>
                    <li className="list-group-item text-center bg-dark text-white"><strong className="me-3">Stats: </strong> <i>{pokemon?pokemon.stats.length:null}</i> </li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default Details
