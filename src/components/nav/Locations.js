import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export const LocationList = () => {
    const [locations, setLocations] = useState([])
    const navigate = useNavigate()

    useEffect(
        () => {
            fetch(`http://localhost:8088/locations`)
            .then(response => response.json())
            .then((locationArray) => {
                setLocations(locationArray)
            })
        },

        []
    )

    return <>
    <h2>List of locations</h2>
    <article className="locations">
            {
                locations.map(
                    (location) => {
                        return <section className="location" key={`location--${location.id}`}> 
                            <button onClick={() => navigate(`/location/${location.id}`)}>Kandy Karn located at: {location.address}</button>
                            <footer> Building is: {location.sqaureFootage} square feet</footer>
                        </section>
                    }
                )
            }
    
    
    
    
        </article>
    </>
    
}
