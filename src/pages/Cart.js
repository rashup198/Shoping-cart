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
    (<div>


      <div>
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      <div>

        <div>
          <div>Your Cart</div>
          <div>Summary</div>
          <p>
            <span>Total Items: {cart.length}</span>
          </p>
        </div>

        <div>
          <p>Total Amount: ${totalAmount}</p>
          <button>
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
