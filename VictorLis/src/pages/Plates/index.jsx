import AllRecipes from "../../components/AllRecipes";
import styles from "./style.module.css";

export default function Plates() {
  return (
    <div className={styles.platesContainer}>
      <AllRecipes />
    </div>
  );
}
