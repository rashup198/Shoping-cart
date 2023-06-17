import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import {FaShoppingCart} from "react-icons/fa" 




const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div>
  {
    cart.length > 0  ? 
    (<div className="flex">


      <div className=" ">
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      <div className=" flex flex-col justify-between xs:bottom-[10px] md:bottom-[100px] sm:bottom-[100px] lg:h-[500px] lg:max-h[800px] fixed lg:right-[100px] bg-violet-600 p-10 mt-3 rounded-xl">

        <div className="mt-[20px]">
          <div className="text-xl text-green-400 font-bold">Your Cart</div>
          <div className="text-4xl text-green-400 font-semibold ">Summary</div>
          <p className="mt-4">
            <span className="text-xl font-bold ">Total Items: {cart.length}</span>
          </p>
        </div>

        <div>
          <p className="text-xl font-bold">Total Amount: ${Math.round(totalAmount)}</p>
          <button className=" bg-red-500 p-2 text-center ml-[20px] mt-[10px] text-white text-xl font-semibold hover:bg-red-400 transition-all duration-200 rounded-md">
            CheckOut Now
          </button>
        </div>

      </div>


    </div>) : 
    (<div className="flex flex-col gap-y-10 h-screen items-center justify-center ">
      <h1 className="text-6xl font-semibold absolute top-[250px]">Cart Empty</h1>
      <Link to={"/"}>
        <button className="bg-blue-500 p-2 font-semibold text-xl flex rounded-md hover:bg-blue-400 hover:text-2xl transition-all duration-200 ">
          Shop Now <span className="mt-[2px] ml-2"><FaShoppingCart className="text-xl"></FaShoppingCart></span>
        </button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;
