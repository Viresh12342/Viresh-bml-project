import React from "react";
import "./Buses.css";
import add from "../svg/Vector.svg";
import Footbar from "../Footbar";
import Nav from "../Nav";
import editSVG from "../svg/edit.svg";
import minusSVG from "../svg/minus.svg";
import { useNavigate } from "react-router";


const data = [
    {sno: 1, busNumber: "HR 76 A 9403", busFuelType: "Diesel", busType:"AC", capacity:20},
    {sno: 2, busNumber: "HR 76 A 5687", busFuelType: "Petrol", busType:"Non-AC", capacity:60}
]
function Buses(){
    const navigate = useNavigate();
    return(
        <div>
            <Nav/>
            <div className="banner">
                <div className="box">
                    <div className="buses-box">
                        <div className="color-box"></div>
                        <div className="text-box">
                            <h1 className="buses-text">Find Buses</h1>
                            <div className="add-box1">
                                <img
                                    className="add-logo"
                                    src={add}
                                    alt = "Add Logo"
                                />
                                <h1 className="add-text">Add</h1>
                            </div>
                        </div>

                        <div className="table-box">
                            
                            <table>
                                <thead>
                                    <tr>
                                        <th>Campus</th>
                                        <th>Geolocation</th>
                                        <th>Buses</th>
                                        <th>Drivers</th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                
                                {data.map((val, key) => {
                                        return (
                                          <tr key={key} className="row-bor">
                                            <td>{val.campus}</td>
                                            <td>{val.geolocation}</td>
                                            <td>
                                                <div style={{
                                                    // display: "flex"
                                                }}>
                                                    {val.buses}
                                                    <img
                                                        onClick={()=> navigate("/bus-details")}
                                                        className="edit"
                                                        style={{
                                                            width: "10px",
                                                            height: "10px"
                                                        }}
                                                        src={editSVG}
                                                        alt = "Edit Logo"
                                                    />
                                                </div>
                                            </td>
                                            <td>
                                            <div style={{
                                                    // display: "flex"
                                                }}>
                                                    {val.drivers}
                                                    <img
                                                        onClick={()=> navigate("/driver-details")}
                                                        className="edit"
                                                        style={{
                                                            width: "10px",
                                                            height: "10px"
                                                        }}
                                                        src={editSVG}
                                                        alt = "Edit Logo"
                                                    />
                                                </div>
                                            </td>
                                            <td className="student-link" onClick={()=> navigate("/student-location")}>student location</td>
                                            <td className="minus">
                                                <img
                                                    src={minusSVG}
                                                    alt = "Minus Button"
                                                />
                                            </td>
                                          </tr>
                                        )
                                      })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <Footbar/>
        </div>
    )
}

export default Buses;