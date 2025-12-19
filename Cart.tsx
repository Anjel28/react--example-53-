import React, { useReducer } from 'react';

type CartItem = {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

type CartState = CartItem[];

type CartAction = 
| { type: 'ADD_ITEM'; payload: CartItem }
| { type: 'REMOVE_ITEM'; payload: {id: number}}
| { type: 'INCREASE_QUANTITY'; payload: {id: number}}
| { type: 'DECREASE_QUANTITY'; payload: {id: number}}
| {type: 'CLEAR_CART'};


function cartReducer(state: CartState, action: CartAction): CartState{
    switch(action.type){
        case 'ADD_ITEM':
            return [...state, action.payload];

            case 'REMOVE_ITEM':
                return state.filter(item => item.id !== action.payload.id);

                case 'INCREASE_QUANTITY':
                    return state.map(item =>
                        item.id === action.payload.id ?
                        {...item, quantity: item.quantity + 1}: item
                    );

                     case 'DECREASE_QUANTITY':
      return state.map(item =>
        item.id === action.payload.id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      
      case 'CLEAR_CART':
        return [];

        default :
        return state;
    }
}

const Cart:React.FC = () => {
    const [cart, dispatch] = useReducer(cartReducer, []);

    const total  = cart.reduce((sum,item) => sum + item.price * item.quantity, 0);

    return(
        <div>
            <h2>Shooping Cart</h2>
            <button onClick ={() => dispatch({type: 'CLEAR_CART'})}>Clear Cart</button>
            <ul>
                {cart.map(item => (
                    <li key={item.id}>
                        {item.name} -₹{item.price} * {item.quantity}
                        <button onClick={()=> dispatch({type: 'INCREASE_QUANTITY', payload:{id:  item.id}})}>+</button>
                         <button onClick={() => dispatch({ type: 'DECREASE_QUANTITY', payload: { id: item.id } })}>-</button>
                         <button onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: { id: item.id } })}>Remove</button>
                    </li>
                ))}
            </ul>
            <h3>Total: ₹{total}</h3>
            <button
        onClick={() =>
          dispatch({
            type: 'ADD_ITEM',
            payload: { id: Date.now(), name: 'Shoes', price: 1200, quantity: 1 },
          })
        }
      >
        Add Shoes
      </button>

      <button
        onClick={() =>
          dispatch({
            type: 'ADD_ITEM',
            payload: { id: Date.now(), name: 'T-Shirt', price: 800, quantity: 1 },
          })
        }
      >
        Add T-Shirt
      </button>
               
        </div>
    )
}

export default Cart;