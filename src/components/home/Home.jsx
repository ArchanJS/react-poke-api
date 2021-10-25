import React, { useEffect, useState } from 'react'
import axios from 'axios';
import SmCard from './SmCard';


const Home = () => {

    const [pokes, setPokes] = useState([]);

    const getData = async () => {
        try {
            const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=100`);
            setPokes(data.results);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData();
    })

    return (
        <>
            <div className="container-fluid bg-primary">
                <h1 className="display-3 text-center bold p-4 pa-head">Poke-App</h1>
                <div className="row">
                    {
                        pokes.length
                            ?
                            pokes.map((poke, ind) => {
                                return <SmCard key={ind} pokName={poke.name} pokeUrl={poke.url} id={ind+1} />
                            })
                            :
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                    }

                </div>
            </div>
        </>
    )
}

export default Home
