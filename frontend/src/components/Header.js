// import { Link } from 'react-router-dom';
// import Search from "./Search";

// export default function Header(cartItems) {
//   const navStyle = {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     padding: "0.5rem 1rem",
//   };

//   const logoStyle = {
//     maxWidth: "150px",
//   };

//   const inputGroupStyle = {
//     display: "flex",
//     flex: 1,
//     maxWidth: "600px",
//     margin: "0 1rem",
//   };

//   const inputStyle = {
//     flex: 1,
//     border: "1px solid #ccc",
//     borderRight: "none",
//     padding: "0.5rem",
//     borderRadius: "4px 0 0 4px",
//   };

//   const buttonStyle = {
//     border: "1px solid #ccc",
//     borderLeft: "none",
//     padding: "0.5rem 1rem",
//     backgroundColor: "#f2c87e",  // Red background
//     color: "#fff",  // Text/icon color stays white
//     cursor: "pointer",
//     borderRadius: "0 4px 4px 0",
//   };

//   const cartStyle = {
//     textAlign: "center",
//   };

//   const cartCountStyle = {
//     fontWeight: "bold",
//     marginLeft: "5px",
//     backgroundColor: "#f2c87e",  // Red background
//     color: "white",
//     padding: "0.2rem 0.9rem",  // Adjust the padding to keep it square-like
//     width: "20px",  // Set a fixed width
//     height: "20px",  // Set a fixed height (same as width to make it square)
//     textAlign: "center",  // Center the text inside
//     display: "inline-block",  // Make it inline-block to control its dimensions
//   };

//   return (
//     <nav style={navStyle}>
//       {/* Logo Section */}
//       <div style={{ flex: "1" }}>
//         <div className="navbar-brand">
//           {/* Wrap the image inside a Link to make it clickable */}
//           <Link to={'/'}>
//             <img style={logoStyle} src="./images/l`.png" alt="Logo" />
//           </Link>
//         </div>
//       </div>
//       <Search />

//       {/* Cart Section */}
//       <div style={{ flex: "1", ...cartStyle }}>
//         <span id="cart">Cart</span>
//         <span style={cartCountStyle} id="cart_count">
//           {cartItems.length}
//         </span>
//       </div>
//     </nav>
//   );
// }



import { Link } from "react-router-dom";
import Search from "./Search";

export default function Header({cartItems}) {
    return <nav className="navbar row">
            <div className="col-12 col-md-3">
                <div className="navbar-brand">
                <Link to="/"> <img width="150px" src="/images/l.png" /></Link>
                </div>
            </div>

            <div className="col-12 col-md-6 mt-2 mt-md-0">
              <Search/>
            </div>

            <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
                <Link to={"/cart"}>
                    <span id="cart" className="ml-3">Cart</span>
                    <span className="ml-1" id="cart_count">{cartItems.length}</span>
                </Link>


                <Link   to={"/login"}>
                  Login/register
                </Link>
            </div>
        </nav>
}