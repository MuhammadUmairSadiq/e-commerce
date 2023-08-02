import { cartContext } from '@/global/Context';
import {useContext }from 'react'
import { BsFillCartCheckFill } from "react-icons/bs";

const CartState = () => {
    let {state} = useContext(cartContext);
    console.log(state)
  return (
    <div className="relative flex-shrink-0 w-11 h-11 flex bg-gray-300 rounded-full items-center justify-center">
      <div
        className="absolute w-4 h-4 bg-red-400 top-1 text-xs rounded-full font-light
                                flex items-center justify-center right-0"
      >
        {state.cart.length}
      </div>
      <BsFillCartCheckFill size={25} />
    </div>
  );
}

export default CartState