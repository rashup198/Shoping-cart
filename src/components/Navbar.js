import {FaShoppingCart} from "react-icons/fa"
import { NavLink } from "react-router-dom";
const Navbar=()=>{
    return(
        <div>
            <div className="flex flex-row justify-between">
                <NavLink to="/">
                <div>
                <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Fshopping-cart_641813&psig=AOvVaw0vRSg8ZKsO9U42LwGYcwI8&ust=1686936332215000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCOj679jlxf8CFQAAAAAdAAAAABAE"></img>
                </div>
                </NavLink>
                
                <div>
                    <NavLink to="/">
                    <p>Home</p>
                    </NavLink>

                    <NavLink to="/cart">
                    <div>
                    <FaShoppingCart></FaShoppingCart>   
                    </div>
                    </NavLink>
                   
                    
                </div>
            </div>
        </div>
    )
}

export default Navbar;