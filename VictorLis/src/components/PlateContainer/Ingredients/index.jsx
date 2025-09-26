import styles from "./style.module.css";

export default function IngredientsList({ ingredients }) {
  const formatIngredient = (ingredient) => `${ingredient[0].toUpperCase()}${ingredient.slice(1, ingredient.lenght)}`

  return (
    <ul className={styles.plateIngredients}>
      {ingredients.map((ingredient) => (
        <li key={ingredient} className={styles.plateIngredient}>- {formatIngredient(ingredient)}</li>
      ))}
    </ul>
  );
}
