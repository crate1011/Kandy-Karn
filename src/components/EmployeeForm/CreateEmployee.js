import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const EmployeeForm = () => {

    const [locations, setLocations] = useState([])
    const navigate = useNavigate()

    useEffect(
        () => {
            fetch(`http://localhost:8088/locations`)
                .then(response => response.json())
                .then((locationsArray) => {
                    setLocations(locationsArray)
                })
        },

        []
    )

    /*
        TODO: Add the correct default properties to the
        initial state object
    */
    const [employee, update] = useState({
        startDate: "",
        payRate: "",
        locationId: "",
        userId: "",
        fullName: "",
        email: "",
        isStaff: "",
    })
    /*
        TODO: Use the useNavigation() hook so you can redirect
        the user to the ticket list
    */
    const localKandyUser = localStorage.getItem("kandy_user")
    const kandyUserObject = JSON.parse(localKandyUser)

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        const employeeToSendToAPI = {
            userId: 0,
            startDate: employee.startDate,
            payRate: employee.payRate,
            locationId: employee.locationId
        }

        const userToSendToAPI = {
            fullName: employee.fullName,
            email: employee.email,
            isStaff: true
        }

        // TODO: Perform the fetch() to POST the object to the API
        return fetch(`http://localhost:8088/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userToSendToAPI)
        })
            .then(response => response.json())
            .then((newUser) => {
                employeeToSendToAPI.userId = newUser.id
                return fetch(`http://localhost:8088/employees`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(employeeToSendToAPI)
                })

            })
            .then(() => navigate("/employees"))
    }

    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Full Name Of New Employee:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Full Employees Name Here"
                        value={employee.fullName}
                        onChange={
                            (evt) => {
                                const copy = { ...employee }
                                copy.fullName = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="email">Email Address:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Employees Email Here"
                        value={employee.email}
                        onChange={
                            (evt) => {
                                const copy = { ...employee }
                                copy.email = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="price">Hourly Pay Rate:</label>
                    <input
                        required autoFocus
                        type="number"
                        className="form-control"
                        placeholder="Hourly Pay Rate Here"
                        value={employee.payRate}
                        onChange={
                            (evt) => {
                                const copy = { ...employee }
                                copy.payRate = parseFloat(evt.target.value)
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="price">Start Date Of Employee:</label>
                    <input
                        required autoFocus
                        type="date"
                        className="form-control"
                        placeholder="Employee Starting Date Here"
                        value={employee.startDate}
                        onChange={
                            (evt) => {
                                const copy = { ...employee }
                                copy.startDate = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="drop__location">
                    <label htmlFor="location">Enter Store Location:</label>
                    <Dropdown
                        label="Locations:"
                        locations={locations}
                        onChange={
                            (evt) => {
                                const copy = { ...employee }
                                copy.locationId = parseInt(evt.target.value)
                                update(copy)
                            }
                        }
                    />
                </div>
            </fieldset>
            <button
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}

                className="btn btn-primary">
                Submit New Employee
            </button>
        </form>
    )
}

const Dropdown = ({ label, locations, onChange }) => {

    return (
        <label className="the__drop">
            {label}
            <select onChange={(event) => { onChange(event) }}>
                <option value={0}>select a location</option>
                {locations.map((location) => (
                    <option key={location.id} value={location.id}>{location.address}</option>
                ))}
            </select>
        </label>
    );
};