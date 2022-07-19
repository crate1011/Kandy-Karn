import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./employee.css"


export const EmployeeList = () => {

    const [employees, setEmployees] = useState([])
    const navigate = useNavigate()

    useEffect(
        () => {
            fetch('http://localhost:8088/employees?_expand=location&_expand=user')
            .then(response => response.json())
            .then((employeeArray) => {
                setEmployees(employeeArray)
            })
        },
        []
    )


return <>

<button onClick={() => navigate("/employee/create")}>Add New Employee</button>

<h2>List Of Employees</h2>

<article className="employees">
    {
        employees.map(
            (employee) => {
                return <section className="employee" key={`employee--${employee.id}`}>
                    <header>Employee: {employee?.user?.fullName}</header>
                    <footer>Location: {employee?.location?.address}</footer>

                </section>
            }
        )
    }



</article>


</>
}