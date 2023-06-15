import React, {useEffect, useState} from 'react';
import Product from '../components/Product';
import Spinner from '../components/Spinner';


const Home =()=>{
    const API_URL= "https://fakestoreapi.com/products";
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);

   async function fetchProductData(){
    setLoading(true);

    try {
        const res= await fetch(API_URL);
        const data = await res.json();
        console.log(data);
        setPosts(data);
    } 
    catch (error) {
        console.log("Error detected" + error);
        setPosts([]);
        
    }
    setLoading(false);
   }

   useEffect(()=>{
    fetchProductData();
   },[])
   
   
    return(
        <div>
            {
                loading? <Spinner></Spinner> : posts.length>0 ? (<div>{
                    posts.map((post)=>(
                        <Product key={posts.id} post={post}></Product>
                    ))
                }
                </div>)
                :
              (<div><p>No Product Found</p></div>) 
            }
        </div>
    )
};

export default Home;