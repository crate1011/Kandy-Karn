import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./products.css"

export const ProductList = () => {
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [topPriced, setTopPriced] = useState([])
    const navigate = useNavigate()

    const localKandyUser = localStorage.getItem("kandy_user")
    const kandyUserObject = JSON.parse(localKandyUser)

    useEffect(
        () => {
            fetch(`http://localhost:8088/products?_expand=type&_sort=name`)
                .then(response => response.json())
                .then((productArray) => {
                    setProducts(productArray)
                    setFilteredProducts(productArray)
                })
        },
        []
    )

    useEffect(
        () => {
            if (topPriced) {
                const highProducts = products.filter(product => product.price > 2)
                setFilteredProducts(highProducts)

            }
            else {
                setFilteredProducts(products)

            }
        },
        [topPriced]
    )

    useEffect(
        () => {
            if (kandyUserObject.staff) {
                setFilteredProducts(filteredProducts)
            }
            else {
                setFilteredProducts(products)

            }
        },
        [products]
    )


    return <>
        {
            kandyUserObject.staff
            ? <>
            <div className="Admin-buttons">
            <button onClick={() => {setTopPriced(true)}}>Top Priced Items</button>
            <button onClick={() => {setTopPriced(false)}}>Show All</button>
            <button onClick={() => navigate("/kandy/create")}>Create Kandy</button>
            </div>
            </>
            : ""

        }


        <h2>List of Products</h2>
        <article className="products">
            {
                filteredProducts.map(
                    (product) => {
                        return <section className="product" key={`product--${product.id}`}>
                            <button>{product.name}</button>
                            <footer>Price: ${product.price}</footer>
                            <div>Type: {product.type.name}</div>
                        </section>
                    }
                )
            }




        </article>
    </>

}
