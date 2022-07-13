import React, { useState, useEffect } from "react";

//import UserService from "../Services/user.service";
//import EventBus from "../common/EventBus";

import {Link} from "react-router-dom";
import {useDispatch,useSelector} from "react-redux";

import {getOffers, deleteOffer} from "../actions/OffreService";

import "./employee.css";

const BoardModerator = () => {
 const dispatch = useDispatch();
 const offers = useSelector((state) => state.employee.offers);



 useEffect(() => {
  dispatch(getOffers());
  // eslint-disable-next-line react-hooks/exhaustive-deps
},[]);

        return (
            <div>
                <h2 className="text-center mt-4">Employees List</h2>
                <div className="row">
                    <Link to={"/employees/add"}>
                        <button style={{marginBottom: "10px"}}
                                className="btn btn-success">Add Employee
                        </button>
                    </Link>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead className="bg-dark" style={{color: "white"}}>
                        <tr className="notbold">
                            <th>Poste</th>
                            <th>Description</th>
                            <th>Experience</th>
                            <th>Type de contrat</th>
                            <th>Niveau d'études</th>
                            <th>Types d'emploi désiré</th>
                            <th>Type</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {offers.map((offer) =>
                            <tr key={offer.id}>
                                 <td>{offer.poste}</td>
                                <td>{offer.description}</td>
                                <td>{offer.emplacement}</td>
                                <td>{offer.experience}</td>
                                <td>{offer.type}</td>
                                <td>{offer.niveau}</td>
                                <td>{offer.typeemploi}</td>
                                <td>
                                    <Link className="btn btn-dark" to={`/offers/${offer.id}`}>
                                    Edit
                                    </Link>
                                    <Link className="btn btn-dark" to={`/offers/view/${offer.id}`}>
                                    View
                                    </Link>
                                    <button className="btn btn-danger">Delete
                                    </button>
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }



export default BoardModerator;
