
// import React, { Fragment, useState, useEffect } from "react";
// import ProductCard from "../components/ProductCard";
// import { useSearchParams } from "react-router-dom";




// export default function Home() {
//   const [products, setProducts] = useState([]);
//   const [searchParams,setSearchParams]=useSearchParams();
//   useEffect(() => {
//     fetch(`${process.env.REACT_APP_API_URL}/products?`+searchParams)
//       .then((res) => res.json())
//       .then((res) => setProducts(res.products || []));
//   }, [searchParams]);

//   return (
//     <Fragment>
//       <section id="products" className="container mt-5">
//         <h1 className="text-center mb-4">Latest Products</h1>
//         <div className="row">
//           {products.map((product, index) => (
//             <ProductCard key={index} product={product} />
//           ))}
//         </div>
//       </section>

//       <footer className="py-1 bg-dark">
//         <p className="text-center text-white mt-1">
//           superMart - 2024-2025, All Rights Reserved
//         </p>
//       </footer>
//     </Fragment>
//   );
// }





import {Fragment, useEffect, useState} from 'react'
import ProductCard from '../components/ProductCard'
import { useSearchParams } from 'react-router-dom';

export default function Home() {
    const [products, setProducts] = useState([]);
    const [searchParams, setSearchParams] =  useSearchParams()

    useEffect(() => {
        fetch(process.env.REACT_APP_API_URL+'/products?'+searchParams)
        .then(res => res.json())
        .then( res => setProducts(res.products))
    },[searchParams])

    return <Fragment>
        <h1 id="products_heading">Latest Products</h1>

        <section id="products" className="container mt-5">
        <div className="row">
            {products.map(product =><ProductCard product={product} />)} 
        </div>
        </section>
    </Fragment>
}