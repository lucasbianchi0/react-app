import React, {useState, useEffect} from 'react'
import { Spinner } from 'react-bootstrap';
import Item from "./Item";
import "../styles/CardList.css"
import axios from 'axios';

import {Link} from "react-router-dom"





const CardList = ({title}) => {

    const [ products, setProducts] = useState ([]);
    const [ isLoading, setIsLoading]= useState(false)

    console.log(products)

    useEffect(() => {
        /*fetch('https://api.github.com/users')
        .then(response => response.json())
        .then(json => setProducts(json))
        setIsLoading(true) 
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProducts(json))

        setTimeout(()=>{ setIsLoading(false);}, 5000)
    }, [])*/

    

    axios(`https://fakestoreapi.com/products`).then((json)=>
    setProducts(json.data))
    setTimeout(()=>{ setIsLoading(false);}, 5000)
   
}, [])


    return (
        <div>
            
            <h2 className="tituloo">{title}</h2>

            {  <div className="estructura-deproductos contenedor-cardlist">
                {products.map((data)=>{
                    return (
                        <div className="produc " key={data.id}>
                            <Link to={`/detail/${data.id}`}>
                                <Item data={data}/>
                            </Link>
                        </div>
                    )
                })}
        </div>}
           
            
        </div>
    )
}

CardList.defaultProps ={
    title:`Productos proximamente`,
}

export default CardList
