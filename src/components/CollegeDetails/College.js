import React from "react";
import "./College.css";
import Footbar from "../Footbar";
import Nav from "../Nav";
import addSvg from "../svg/Vector.svg";
import minusSVG from "../svg/minus.svg";
import editSVG from "../svg/edit.svg";
import { useNavigate } from "react-router";



const data = [
    { campus: "Indian Institute of Technology, Delhi", geolocation: " Lat: 28.4595°, Long : 77.0266°", buses: "4", drivers: "6" },
    { campus: "Indian Institute of Technology, Mumbai", geolocation: " Lat: 28.4595°, Long : 77.0266°", buses: "20", drivers: "20" },
    { campus: "Indian Institute of Technology, Mumbai", geolocation: " Lat: 28.4595°, Long : 77.0266°", buses: "20", drivers: "20" },
    { campus: "Indian Institute of Technology, Mumbai", geolocation: " Lat: 28.4595°, Long : 77.0266°", buses: "20", drivers: "20" },
    { campus: "Indian Institute of Technology, Mumbai", geolocation: " Lat: 28.4595°, Long : 77.0266°", buses: "20", drivers: "20" },
    { campus: "Indian Institute of Technology, Mumbai", geolocation: " Lat: 28.4595°, Long : 77.0266°", buses: "20", drivers: "20" },
    { campus: "Indian Institute of Technology, Mumbai", geolocation: " Lat: 28.4595°, Long : 77.0266°", buses: "20", drivers: "20" },
    { campus: "Indian Institute of Technology, Mumbai", geolocation: " Lat: 28.4595°, Long : 77.0266°", buses: "20", drivers: "20" },
]
function College() {
    const [open, setOpen] = React.useState(false);
    const handleClickToOpen = () => {
        setOpen(true);
    }
    const handleClickToClose = () => {
        setOpen(false);
    }
    const navigate = useNavigate();
    return (
        <div>
            <Nav />
            {/* <dialog open={open} onClose={handleClickToClose} className="dialog-box">
                <div>
                    <h1>Hello Everyone! What are you doing</h1>
                </div>
                <button>Close</button>
            </dialog> */}
            <div className="banner">
                <div className="box">
                    <div className="college-box">
                        <div className="color-box"></div>
                        <div className="text-box">
                            <h1 className="college-text">Find Campus</h1>
                            <div className="add-box" onClick={open}>
                                <img
                                    className="add-logo"
                                    src={addSvg}
                                    alt="Add Logo"
                                // onClick={handleClickToOpen}
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
                                                            onClick={() => navigate("/bus-details")}
                                                            className="edit"
                                                            style={{
                                                                width: "10px",
                                                                height: "10px"
                                                            }}
                                                            src={editSVG}
                                                            alt="Edit Logo"
                                                        />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div style={{
                                                        // display: "flex"
                                                    }}>
                                                        {val.drivers}
                                                        <img
                                                            onClick={() => navigate("/driver-details")}
                                                            className="edit"
                                                            style={{
                                                                width: "10px",
                                                                height: "10px"
                                                            }}
                                                            src={editSVG}
                                                            alt="Edit Logo"
                                                        />
                                                    </div>
                                                </td>
                                                <td className="student-link" onClick={() => navigate("/student-location")}>student location</td>
                                                <td className="minus">
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
export default College;