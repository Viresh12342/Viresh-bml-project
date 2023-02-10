import React, { useState } from 'react'
import '../components/css/Driver.css'
import {nanoid} from 'nanoid';
import add from '../image/add.jpg'
import Nav from '../headerFooter/header'
import Footbar from '../headerFooter/footer'
import editSVG from "../components/svg/edit.svg";
import minusSVG from "../components/svg/minus.svg";

function Driver() {

    const driverData = [
        {
            driverId: "1",
            driverName: "DriverXYZ",
            driverNumber: "9876543210"
        },
        {
            driverId: "2",
            driverName: "DriverABC",
            driverNumber: "9867543120"
        }
    ]

    const [driver, setDriver] = useState(driverData);
    const [addData, setAddData] = useState({
        driverId: '',
        driverName: '',
        driverNumber: '',
    });

    const handleAddFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;

        const newFormData = { ...addData};
        newFormData[fieldName] = fieldValue;

        setAddData(newFormData);
    }

    const handleAddFormSubmit = (e) => {
        e.preventDefault();

        const newDriver = {
            id: nanoid(),
            driverId: addData.driverId,
            driverName: addData.driverName,
            driverNumber: addData.driverNumber,
        };

        const newDrivers = [...driver, newDriver];
        setDriver(newDrivers);
    };

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
                                type="text"
                                name='driverid'
                                required='required'
                                placeholder='Enter driver id'
                                onChange={handleAddFormChange}
                            />
                            <input
                                type="text"
                                name='driverName'
                                required='required'
                                placeholder='Enter driver name'
                                onChange={handleAddFormChange}
                            />
                            <input
                                type="text"
                                name='driverNumber'
                                required='required'
                                placeholder='Enter driver number'
                                onChange={handleAddFormChange}
                            />
                        </div>
                        <button className='submit' onClick={handleAddFormSubmit}>Submit</button>
                    </dialog> : ''}
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
                                        <th>Driver Id</th>
                                        <th>Driver Name</th>
                                        <th>Driver Number</th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {driver.map((e, key) => {
                                        return (
                                            <tr key={key} className="row-bor">
                                                <td>{e.driverId}</td>
                                                <td>{e.driverName}</td>
                                                <td>{e.driverNumber}</td>
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
export default Driver;
