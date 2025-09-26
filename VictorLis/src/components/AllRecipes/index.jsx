import styles from "./style.module.css";
import { Link } from "react-router-dom";
import { useGetAll } from "../../_hooks/use-get-all";
import AllRecipeCard from "./components/Card";

export default function AllRecipes() {
  const data = useGetAll();
  const recipes = data?.pratos.slice(2, data?.pratos.lenght); // só para não bater com os "ultimos pratos"

  return (
    <section className={styles.allRecipesSection} id="#all-recipes">
      <h2 className={styles.title}>Todos Pratos</h2>
      <div className={styles.recipesGrid}>
        {recipes.map((recipe) => (
          <AllRecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </section>
  );
}
