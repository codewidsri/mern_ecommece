// import {useState} from 'react';
// import {useNavigate} from 'react-router-dom';

// export default function Search(){


//     const buttonStyle = {
//         border: "1px solid #ccc",
//         borderLeft: "none",
//         padding: "0.5rem 1rem",
//         backgroundColor: "#f2c87e", 
//         color: "#fff",  
//         cursor: "pointer",
//         borderRadius: "0 4px 4px 0",
//       };
//       const inputStyle = {
//         flex: 1,
//         border: "1px solid #ccc",
//         borderRight: "none",
//         padding: "0.5rem",
//         borderRadius: "4px 0 0 4px",
//       };
//       const inputGroupStyle = {
//         display: "flex",
//         flex: 1,
//         maxWidth: "600px",
//         margin: "0 1rem",
//       };


//     const [keyword,setKeyword] =useState("");

//     const navigate=useNavigate();
//     const searchHandler =()=>{
//         navigate('/search?keyword='+keyword)
//     }

  


//     return  <div style={inputGroupStyle}>
//       <input
//         type="text"
//         id="search_field"
//         onChange={(e)=> setKeyword(e.target.value)}
//         onBlur={searchHandler}
//         placeholder="Enter Product Name ..."
//         style={inputStyle}
//       />
//       <button onClick={searchHandler} id="search_btn" style={buttonStyle}>
//         <i className="fa fa-search" aria-hidden="true"></i>
//       </button>
//     </div>
// }




import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

export default function Search() {
    const [keyword, setKeyword]  = useState("");
    const navigate = useNavigate();

    const searchHandler = () => {
        navigate('/search?keyword='+keyword)
    }

    return   <div className="input-group">
                <input
                    type="text"
                    id="search_field"
                    onChange={(e) => setKeyword(e.target.value)}
                    className="form-control"
                    onBlur={searchHandler}
                    placeholder="Enter Product Name ..."
                />
                <div className="input-group-append">
                    <button onClick={searchHandler} id="search_btn" className="btn">
                    <i className="fa fa-search" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
}