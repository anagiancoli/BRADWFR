import styles from "./style.module.css";
import { Link } from "react-router-dom";
import { useGetAll } from "../../_hooks/use-get-all";
import LatestRecipeCard from "./components/Card";

export default function LatestRecipes() {
  const data = useGetAll();
  const recipes = data?.pratos?.slice(0, 2);

  return (
    <section className={styles.latestRecipesSection}>
      <h2 className={styles.title}>Últimos Pratos</h2>
      <div className={styles.recipesGrid}>
        {recipes.map((recipe) => (
          <LatestRecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </section>
  );
}
