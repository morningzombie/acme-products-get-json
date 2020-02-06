import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
    const [products, setProducts] = useState([]);

    class App extends Component

    useEffect(() => {
        axios.get('/api/products')
            .then(response => {
                setProducts(response.data);
                return products
            });
    }, []);

