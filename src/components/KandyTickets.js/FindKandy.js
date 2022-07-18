import { useEffect, useState } from "react"
import "./KandyTickets.css"


export const FindKandy = ({searchTermState}) => {
    const [kandys, setKandy] = useState([])
    const [filteredKandy, setFiltered] = useState([])

    useEffect(
        () => {
            fetch(`http://localhost:8088/products`)
            .then(response => response.json())
            .then((kandysArray) => {
                setKandy(kandysArray)
            })
        },
        []
    )

    useEffect(
        () => {
            const searchedKandy = kandys.filter(kandy => {
                return kandy.name.toLowerCase().startsWith(searchTermState.toLowerCase())
            })
            setFiltered(searchedKandy)
        },
        [ searchTermState ]
    )

    return <> <h2>List of Kandy</h2>

    <article className="kandyTickets">
        {
            filteredKandy.map(
                (kandy) => {
                    return <section className="kandy" key={`kandy--${kandy.id}`}> 
                        <header>Kandy: {kandy.name}</header>
                        <footer>Price: ${kandy.price}</footer>
                    </section>
                }
            )
        }




    </article>
    </>
}

