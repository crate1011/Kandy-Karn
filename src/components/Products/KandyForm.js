import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import "./products.css"

export const KandyForm = () => {

    const [products, setProducts] = useState([])
    const [types, setTypes] = useState([])

    useEffect(
        () => {
            fetch(`http://localhost:8088/products`)
            .then(response => response.json())
            .then((productsArray) => {
               setProducts(productsArray)
            })
        },

        []
    )
    
    useEffect(
        () => {
            fetch(`http://localhost:8088/types`)
            .then(response => response.json())
            .then((typesArray) => {
               setTypes(typesArray)
            })
        },

        []
    )
    /*
        TODO: Add the correct default properties to the
        initial state object
    */
    const [type, updateType] = useState({})
    const [product, update] = useState({
        name: "",
        typeId: "",
        price: "",
        })
    /*
        TODO: Use the useNavigation() hook so you can redirect
        the user to the ticket list
    */
   const navigate = useNavigate()

   const localKandyUser = localStorage.getItem("kandy_user")
   const kandyUserObject = JSON.parse(localKandyUser)

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

    const ticketToSendToAPI = {
        name: product.name,
        typeId: product.typeId,
        price: product.price,
    }

        // TODO: Perform the fetch() to POST the object to the API
        return fetch(`http://localhost:8088/products`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(ticketToSendToAPI)
        })
        .then(response => response.json())
        .then(() => {
            navigate("/products")

        })
    }

    return (
        <form className="produtForm">
            <h2 className="productForm__title">Add New Kandy</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Name:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Create New Candy"
                        value={product.name}
                        onChange={
                            (evt) => {
                                const copy = {...product}
                                copy.name = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="price">Price:</label>
                    <input
                        required autoFocus
                        type="number"
                        className="form-control"
                        placeholder="Add Price"
                        value={product.price}
                        onChange={
                            (evt) => {
                                const copy = {...product}
                                copy.price = parseFloat(evt.target.value)
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="drop__candy">
                    <Dropdown
                     label="Kandy Type:"
                     options={types}
                        value={type.id}
                        onChange={
                            (evt) => {
                                const copy = {...product}
                                copy.typeId = parseInt(evt.target.value)
                                update(copy)
                            }
                        }
                         />
                </div>
            </fieldset>
            <button
            onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
            
            className="btn btn-primary">
                Submit Kandy
            </button>
        </form>
    )
}

const Dropdown = ({label, options, onChange}) => {

    return (
    <label className="the__drop">
        {label}
        <select onChange={(event) => {onChange(event)}}>
            <option value={0}>select kandy type</option>
            {options.map((option) => (
                 <option key={option.id} value={option.id}>{option.name}</option>
            ))}

        </select>
    </label>
    );
};