import { useContext, useEffect, useState } from 'react'
import CartIcon from '../../../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'
import CartContext from '../../../../store/cart-context'

const HeaderCartButton = props =>{
   const cartCtx = useContext(CartContext)
   const [btnHighlighted, setBtnHighlighted] = useState(false)

   const numberOfCartItems = cartCtx.items.reduce((curr, item)=>{
      return curr + item.amount
   }, 0)

   const btnClasses = `${classes.button} ${ btnHighlighted ? classes.bump : ''}`

   useEffect(()=>{
      if(cartCtx.items.length === 0){
         return
      }
      setBtnHighlighted(true)
      const timer = setTimeout(()=>{
         setBtnHighlighted(false)
      },300)
      return ()=>{
         clearInterval(timer)
      }
   },[cartCtx.items])

   return <button className={btnClasses} onClick={props.onShowCart}>
      <span className={classes.icon}>
         <CartIcon/>
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
   </button>
}

export default HeaderCartButton