import { useParams } from "react-router-dom";
import styles from "./style.module.css";
import { useGetById } from "../../_hooks/use-get-by-id";
import IngredientsList from "../../components/PlateContainer/Ingredients";

export default function PlateDetails() {
  const { id } = useParams();
  const { prato } = useGetById(Number(id));
  console.log(prato)

  if (!prato) return <div className={styles.loading}>Carregando...</div>;

  return (
    <div className={styles.plateContainer}>
      <img src={prato.image} alt={prato.nome} className={styles.plateImage} />
      <div className={styles.plateInfo}>
        <h1 className={styles.plateTitle}>{prato.nome}</h1>
        <p className={styles.plateDescription}>{prato.descricao}</p>
        <IngredientsList ingredients={prato.ingredients}/>
      </div>
    </div>
  );
}
