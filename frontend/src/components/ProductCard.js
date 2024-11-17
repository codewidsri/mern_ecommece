// import { Link } from 'react-router-dom';
// import React from "react";

// export default function ProductCard({ product }) {
//   // Handle missing product or image data
//   const productImage = product?.images?.[0]?.image || "./images/placeholder.jpg";
//   const productName = product?.name || "Product Name Not Available";
//   const productPrice = product?.price || "Price Not Available";

//   return (
//     <div className="col-sm-12 col-md-6 col-lg-3 my-3">
//       <div className="card p-3 rounded">
//         <img
//           className="card-img-top mx-auto"
//           src={productImage}
//           alt={productName}
//         />
//         <div className="card-body d-flex flex-column">
//           <h5 className="card-title">
//             <Link to={"/product/"}>{productName}</Link>
//           </h5>
//           <div className="ratings mt-auto">
//             <div className="rating-outer">
//               <div
//                 className="rating-inner"
//                 style={{ width: `${(product?.ratings / 5) * 100}%` }}
//               ></div>
//             </div>
//           </div>
//           <p className="card-text">${productPrice}</p>
//           <Link to={"/product/" + product._id} id="view_btn" className="btn btn-block">
//             View Details
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

import {Link} from 'react-router-dom';

export default function ProductCard({product}) {
    return <div className="col-sm-12 col-md-6 col-lg-3 my-3">
            <div className="card p-3 rounded">
                <img
                className="card-img-top mx-auto"
                src={product.images[0].image}
                />
                <div className="card-body d-flex flex-column">
                <h5 className="card-title">
                <Link to={"/product/"+product._id} >{product.name}</Link>
                </h5>
                <div className="ratings mt-auto">
                    <div className="rating-outer">
                    <div className="rating-inner" style={{width : `${product.ratings/5 * 100}%`}} ></div>
                    </div>
                </div>
                <p className="card-text">${product.price}</p>
                <Link to={"/product/"+product._id} id="view_btn" className="btn btn-block">View Details</Link>
                </div>
            </div>
        </div>
}