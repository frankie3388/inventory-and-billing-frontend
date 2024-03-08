import React, { useEffect, useState } from "react";
import ProductsTable from '../components/ProductsTable';

// This function component is responsible for making a fetch request to the
// server and displaying all the products in the database.
function ProductsPage() {

    // State to hold the blogs and loading state
    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(true); // Add loading state

    // Effect hook to fetch blogs on component mount
    useEffect(() => {
        console.log("Card search component has mounted! Making a fetch request now...");

        async function apiRequest() {
            try {
                // Fetch blogs from the server
                let response = await fetch("http://localhost:5000/products/all", {
                    method: "GET"
                });

                // Check for HTTP errors
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                // Parse response data and update state
                let responseData = await response.json();
                setProducts(responseData.Product);
                setLoading(false); // Set loading state to false after receiving blogs
                console.log(responseData.Product);
            } catch (error) {
                console.error("Error fetching blogs:", error);
            }
        }

        apiRequest();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <h1>Inventory</h1>
            {loading ? ( // Conditionally render "Loading..." while loading is true
                <h2>Loading...</h2>
            ) : (
                <ProductsTable
                    products={products}
                />
            )}
            
        </div>
    )
}

export default ProductsPage;