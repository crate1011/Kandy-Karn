import React, {useState, useEffect} from "react";

export const BakerStreet = () => {
    const [locationsProducts, setLocationsProducts] = useState([])

    useEffect(
        () => {
            fetch(`http://localhost:8088/locationsProducts?_expand=product&locationId=1`)
            .then(response => response.json())
            .then((productsArray) => {
               setLocationsProducts(productsArray)
            })
        },

        []
    )

    return (
        <>
    <article className="products">
    {locationsProducts.map(
        (locationProduct) => { if(locationProduct.quantity > 0)
                return <section className="product" key={`bakerStreet--${locationProduct.product.id}`}>
                    <header>{locationProduct.product.name}</header>
                    <div>${locationProduct.product.price}</div>
                    <footer>Quantity: {locationProduct.quantity}</footer>
                </section>
            }
        )
    }
</article>
        </>
    )
}

export const HahaYeah = () => {
    const [locationsProducts, setLocationsProducts] = useState([])

    useEffect(
        () => {
            fetch(`http://localhost:8088/locationsProducts?_expand=product&type&locationId=2`)
            .then(response => response.json())
            .then((productsArray) => {
               setLocationsProducts(productsArray)
            })
        },

        []
    )

    return (
        <>
    <article className="products">
    {locationsProducts.map(
        (locationProduct) => { if(locationProduct.quantity > 0)
                return <section className="product" key={`HahaYeah--${locationProduct.product.id}`}>
                    <header>{locationProduct.product.name}</header>
                    <div>${locationProduct.product.price}</div>
                    <footer>Quantity: {locationProduct.quantity}</footer>
                </section>
            }
        )
    }
</article>
        </>
    )
}

export const Skrittle = () => {
    const [locationsProducts, setLocationsProducts] = useState([])

    useEffect(
        () => {
            fetch(`http://localhost:8088/locationsProducts?_expand=product&locationId=3`)
            .then(response => response.json())
            .then((productsArray) => {
               setLocationsProducts(productsArray)
            })
        },

        []
    )

    return (
        <>
    <article className="products">
    {locationsProducts.map(
        (locationProduct) => { if(locationProduct.quantity > 0)
                return <section className="product" key={`Skrittle--${locationProduct.product.id}`}>
                    <header>{locationProduct.product.name}</header>
                    <div>${locationProduct.product.price}</div>
                    <footer>Quantity: {locationProduct.quantity}</footer>
                </section>
            }
        )
    }
</article>
        </>
    )
}