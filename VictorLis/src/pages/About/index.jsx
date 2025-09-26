import styles from "./style.module.css";
import EquipeImage from '/about/equipe.jpg'

export default function About() {
  return (
    <div className={styles.teamContainer}>
      <img src={EquipeImage} alt={"Equipe"} className={styles.teamImage} />
      <p className={styles.teamInfo}>
        A nossa equipe de desenvolvimento é muito dedicada e apaixonada por criar soluções inovadoras para tornar a vida dos nossos usuários mais fácil e agradável. Com uma combinação de habilidades técnicas, criatividade e trabalho em equipe, estamos comprometidos em entregar um produto de alta qualidade que atenda às necessidades e expectativas dos nossos clientes. Juntos, trabalhamos incansavelmente para transformar ideias em realidade e proporcionar uma experiência excepcional para todos que utilizam nossas soluções.
      </p>
    </div>
  );
}
