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
        <div className='flex flex-row justify-center gap-x-[100px] mt-[50px]'>
        <div className='h-[180px]'>
            <img src={item.image} height={150} width={150}></img>
        </div>
        <div className='flex flex-col max-w-[500px] gap-y-5 align-baseline'>
            <h1 className='text-xl font-bold'>
                {item.title}
            </h1>
            <h1 className='text-lg text-slate-800 '>{item.description}</h1>
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