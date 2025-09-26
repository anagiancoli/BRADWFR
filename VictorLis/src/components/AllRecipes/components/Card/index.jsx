import { Link } from "react-router-dom";
import styles from "./style.module.css";

export default function AllRecipeCard({ recipe }) {
  return (
    <Link
      key={recipe.id}
      className={styles.recipeCard}
      to={`/plate/${recipe.id}`}
    >
      <img
        src={recipe.image}
        alt={recipe.title}
        className={styles.recipeImage}
      />
      <div className={styles.recipeTitle}>{recipe.nome}</div>
    </Link>
  );
}
