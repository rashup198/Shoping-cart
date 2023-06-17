import { toast } from 'react-hot-toast';
import {MdDelete} from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { remove } from '../redux/Slices/CartSlice';



const CartItem=({item, itemIndex})=>{
    const dispatch = useDispatch();

    const removeFromCart=()=>{
        dispatch(remove(item.id));
        toast.success("Item Removed")
    }

    return(
        <div className='mb-[200px]'>
        <div className='flex flex-row justify-center gap-x-[100px] mt-[50px] '>
        <div className=''>
            <img src={item.image} height={150} width={150}></img>
        </div>
        <div className='flex flex-col max-w-[500px] gap-y-5 '>
            <h1 className='text-xl font-bold'>
                {item.title}
            </h1>
            <h1 className='text-lg text-slate-800 '>{item.description.split(" ").slice(0,12).join(" ") + "..."}</h1>
            <div className=' flex  flex-row gap-x-[250px]'>
                <p className='text-xl text-green-500 font-bold'>${item.price}</p>
                <div onClick={removeFromCart}>
                    <MdDelete className='bg-red-500 rounded-full text-2xl p-1 cursor-pointer'></MdDelete>
                </div>
            </div>
            
        </div>
            
        </div>
        <hr className='h-px my-8 ml-[300px] w-[650px] bg-gray-200 border-0 dark:bg-gray-500'></hr>
        </div>        
    )
}

export default CartItem;