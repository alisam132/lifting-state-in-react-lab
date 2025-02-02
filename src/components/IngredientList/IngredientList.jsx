// src/components/IngredientList/IngredientList.jsx

const IngredientList = (props) => {
  return (
    <ul>
      {props.ingredient.map((ingredient, index) => (
        <li style={{ backgroundColor: ingredient.color }} key={index}>
          {ingredient.name}
          <button type="submit" onClick={() => props.addToBurger(ingredient)}>
            +
          </button>
        </li>
      ))}
    </ul>
  );
};

export default IngredientList;
