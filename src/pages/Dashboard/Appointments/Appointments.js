import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Doctors() {
    const [AllDr, setAllDr] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        axios
            .get("https://envoy-health-api.vercel.app/appointment/appoints")
            .then((response) => {
                console.log("response : ", response.data);
                setAllDr(response.data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("Error : ", error);
            });

        console.log(AllDr);
    }, []);
    return (
        <>
            <div className="container">
                <div className="row my-3 cart">
                    <div className="col">
                        <div className="table-responsive border">
                            <table className="table table-hover align-middle align-middle">
                                <thead className='table-dark'>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">ID</th>
                                        <th scope="col">Time</th>
                                        <th scope="col">DATE</th>
                                        <th scope="col">DR ID</th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        AllDr.map((doc, i) => {
                                            return (
                                                <tr>
                                                    <th scope="row">{i + 1}</th>
                                                    <td>{doc._id}</td>
                                                    <td>{doc.time}</td>
                                                    <td>{doc.date}</td>
                                                    <td>{doc.drId}</td>

                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
           
        </>


    )
}
