import { useRef, useState } from 'react'
import Input from '../../../../UI/Input/Input'
import classes from './MealItemForm.module.css'

const MealItemFrom = props =>{
   const amountInputRef = useRef()
   const [amountIsValid, setAmountIsValid] =  useState(true)

   const submitHandler = event =>{
      event.preventDefault();
      const enteredAmount = amountInputRef.current.value
      const enteredAmountNumber = +enteredAmount

      if(
         enteredAmount.trim().length === 0 ||
         enteredAmount < 1 ||
         enteredAmount >5   
      ){
         return
      }
      props.onAddToCart(enteredAmountNumber)
   }

   return <form className={classes.form} onSubmit={submitHandler}>
      <Input 
         ref={amountInputRef}
         label="Amount" 
         input={{
            id: 'amount' + props.id,
            type: 'number',
            min: '1',
            max: '5',
            step: '1',
            defaultValue: '1'
         }}
      />
      <button>+ Add</button>
      {!amountIsValid &&  <p>Please enter a valid amount (1-5).</p> }
   </form>
}

export default MealItemFrom