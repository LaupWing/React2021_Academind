import { useReducer } from 'react'
import CartContext from './cart-context'

const defaultCartState = {
   items: [],
   totalAmount: 0
}

const cartReducer = (state, action)=>{
   if(action.type === 'ADD'){
      const updatedItems = [...state.items, action.value]
      const updatedTotalAmount = state.totalAmount + (action.item.price * action.item.amount)

      const existingCartIndex = state.items.findIndex(item => item.id === action.item.id)

      const existingCartItem = state.items[existingCartIndex]
      let updateItem
      let updatedItems

      if(existingCartItem){
         updatedItem = {
            ...existingCartItem,
            amount: existingCartItem + 1
         }
         updatedItems = [...state.items]
         updatedItems[existingCartItem] = updateItem
      }else{
         updatedItem = {...action.item}
         updatedItems = state.items.concat(action.item)
      }

      return {
         items: updatedItems,
         totalAmount: updatedTotalAmount
      }
   }

   return defaultCartState
}

const CartProvider = props => {
   const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

   const addItemToCartHandler = item =>{
      dispatchCartAction({
         type: 'ADD',
         value: item
      })
   }
   const removeItemFromCartHandler = id =>{}

   const cartContext = {
      items: cartState.items,
      totalAmount: cartState.totalAmount,
      addItem: addItemToCartHandler,
      removeItem: removeItemFromCartHandler
   }

   return <CartContext.Provider value={cartContext}>
      {props.children}
   </CartContext.Provider>
}

export default CartProvider