import image from '../../../assets/meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton/HeaderCartButton'

const Header = props =>{
   return <>
      <header className={classes.header}>
         <h1>ReactMeals</h1>
         <HeaderCartButton/>
      </header>
      <div className={classes['main-image']}>
         <img src={image} alt="A table full of delicious food" />
      </div>
   </>
}

export default Header