import React, { useState } from 'react'
import '../css/busDetails.css'
import "../components/Buses/Buses.css";
import add from '../image/add.jpg'
import Nav from '../headerFooter/header'
import Footbar from '../headerFooter/footer'
import editSVG from "../components/svg/edit.svg";
import minusSVG from "../components/svg/minus.svg";

function BusDetails() {

    const busData = [
        {
            busId: "1",
            busNumber: "HR 76 A 9876",
            busFuelType: "Petrol",
            busCapacity: "45",
            busType: "Non-AC"
        },
        {
            busId: "2",
            busNumber: "HR 26 P 6903",
            busFuelType: "Diesel",
            busCapacity: "30",
            busType: "AC"
        }
    ]

    const [popup, setPop] = useState(false);
    const handleClickToOpen = () => {
        setPop(!popup);
    }
    const handleClickToClose = () => {
        setPop(false);
    }

    return (
        <div>
            <Nav />
            <div>
                {popup ? 
            <dialog className="dialog-box">
                <h1 onClick={handleClickToClose}>X</h1>
                <div className="div1">
                <input
                                    type="number"
                                    name='bus id'
                                    required='required'
                                    placeholder='Enter bus id'
                                />
                                <input
                                    type="text"
                                    name='bus number'
                                    required='required'
                                    placeholder='Enter bus number'
                                />
                                <input
                                    type="text"
                                    name='bus fuel type'
                                    required='required'
                                    placeholder='Enter bus fuel type'
                                />
                                <input
                                    type="number"
                                    name='bus capacity'
                                    required='required'
                                    placeholder='Enter bus capacity'
                                />
                                <input
                                    type="text"
                                    name='Bus Type'
                                    required='required'
                                    placeholder='Enter bus type'
                                />
                </div>
                <button className='submit'>Submit</button>
            </dialog>:''}
            </div>
            <div className='container'>
                <div className='container1'>
                    <div className="bus-box">
                        <div className="color-box"></div>
                        <div className="text-box">
                            <div></div>
                            <div className="add-box" onClick={handleClickToOpen}>
                                <img
                                    className="add-logo"
                                    src={add}
                                    alt="Add Logo"
                                />
                                <h1 className="add-text">Add</h1>
                            </div>
                        </div>

                        <div className='table-box'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Bus Id</th>
                                        <th>Bus Number</th>
                                        <th>Bus Fuel Type</th>
                                        <th>Bus Capacity</th>
                                        <th>Bus Type</th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {busData.map((e, key) => {
                                        return (
                                            <tr key={key} className="row-bor">
                                                <td>{e.busId}</td>
                                                <td>{e.busNumber}</td>
                                                <td>{e.busFuelType}</td>
                                                <td>{e.busCapacity}</td>
                                                <td>{e.busType}</td>
                                                <td className='edit'>
                                                    <img
                                                        src={editSVG}
                                                        alt="Edit Logo"
                                                    />
                                                </td>
                                                <td classname="minus">
                                                    <img
                                                        src={minusSVG}
                                                        alt="Minus Button"
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
            <Footbar />
        </div>
    )
}
export default BusDetails;
