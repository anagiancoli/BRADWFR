import { useState } from "react";
import { useModal } from "../../_hooks/use-modal";
import styles from "./style.module.css";
import { XCircle } from "lucide-react";
import { toast } from "react-toastify";
import ButtonLink from "./components/Link";
import LinksList from "./components/Links";

export default function ModalComponent() {
    const { toggleOpen } = useModal()

    const [email, setEmail] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e) => {
        setIsLoading(false)
        e.preventDefault()
        await setTimeout(() => {
            toast.success("Email cadastrado!")
        }, 5000)
        setIsLoading(true)
    }

    return (
        <div className={styles.modal}>
            <div>
                <button className={styles.closeButton} onClick={toggleOpen}>
                    <XCircle />
                    Fechar
                </button>
                <h1>Bem vindo!</h1>
                <div className={styles.profile}>
                    <img className={styles.profileImage} src="https://github.com/Victor-Lis.png" />
                    <p className={styles.profileParagraph}>Eu sou o Victor, o desenvolvedor sistema e apreciador dessas receitas!</p>
                </div>
            </div>
            <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
                <h3>Se inscreva para nos acompanhar!</h3>
                <p>Entre em contato</p>
                <input onChange={(e) => setEmail(e.target.value)} className={styles.formInput} />
                <button className={styles.formButton}>{isLoading ? "Enviando..." : "Enviar!"}</button>
            </form>
            <LinksList />
        </div>
    );
}