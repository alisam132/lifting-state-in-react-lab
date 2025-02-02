// src/components/BurgerStack/BurgerStack.jsx

const BurgerStack = (props) => {
    return (
      <ul>
      {props.ingredient.map((ingredient, index) => (
        <li style={{ backgroundColor: ingredient.color }} key={index}>
          {ingredient.name}
          <button type="submit" onClick={() => props.removeFromBurger(ingredient)}>
            X
          </button>
        </li>
      ))}
    </ul>
      
    ) 
  };
  
  export default BurgerStack;
  