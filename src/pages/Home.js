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
                loading? <Spinner></Spinner> : posts.length>0 ?
                 (<div className='grid xs:grid-col-1 sm:grid-col-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5'>{
                    posts.map((post)=>(
                        <Product key={posts.id} post={post}></Product>
                    ))
                }
                </div>)
                :
              (<div className='flex justify-center items-center'><p>No Product Found</p></div>) 
            }
        </div>
    )
};

export default Home;