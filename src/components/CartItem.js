import { toast } from 'react-hot-toast';
import {FcDeleteDatabase} from 'react-icons/fc';
import { useDispatch } from 'react-redux';
import { remove } from '../redux/Slices/CartSlice';


const CartItem=({item, itemIndex})=>{
    const dispatch = useDispatch();

    const removeFromCart=()=>{
        dispatch(remove(item.id));
        toast.success("Item Removed")
    }

    return(
        <div className='flex flex-row'>
        <div>
            <img src={item.image} className=''></img>
        </div>
        <div className='flex flex-col'>
            <h1>
                {item.title}
            </h1>
            <h1>{item.description}</h1>
            <div className=' flex  flex-row justify-between'>
                <p>{item.price}</p>
                <div onClick={removeFromCart}>
                    <FcDeleteDatabase></FcDeleteDatabase>
                </div>
            </div>
        </div>
            
        </div>
    )
}

export default CartItem;