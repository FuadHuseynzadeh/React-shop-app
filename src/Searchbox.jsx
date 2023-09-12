import React, {useState, useEffect} from 'react'
import "./Searchbox.css";
import axios from 'axios';

const Searchbox = () => {
    const[search, setSearch]=useState("")
    const[data, setData]=useState([])

    useEffect(() => {
      fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.error(err))  
      // axios.get()
        // .then((response) => {
        //     console.log(response);
        //     setData(response.data)
        // })
        // .catch((error) => {
        //     console.log(error);
        // })
    }, [])
  return (
  <div>
    <div className="container">
    <h1>search box using react</h1>
    <input type="search" name="src" placeholder='search products here' value={search} onChange={(e) =>{setSearch(e.target.value)}} />
    </div>

    {
      data  
        .filter((row)=>{
          if(search==""){
            return row;
          }
          else if(row.title.toLowerCase().includes(search.toLowerCase())){
            return row;
          }
        })

        .map((row, i)=>{
          return(
           <div className="card" key={i}>
            <div className="image">
              <img src={row.image} alt={row.image} />
            </div>
            <div className="title">
              <h2>{row.title.substring(0, 20)}</h2>
              <p>${row.price}</p>
            </div>
           </div>
          )
        })
    }
  </div>
  )
}



export default Searchbox;
