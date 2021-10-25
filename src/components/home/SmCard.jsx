import React from 'react';
import {NavLink} from 'react-router-dom';

const smCard = ({pokName,pokeUrl,id}) => {
    return (
        <>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12 my-2">
                <div className="card bg-dark text-info">
                    <div className="card-body">
                        <h5 className="card-title mb-4">{pokName.toUpperCase()}</h5>
                        <NavLink exact to={`/details/${id}`} className="btn btn-info">Check details</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default smCard;
