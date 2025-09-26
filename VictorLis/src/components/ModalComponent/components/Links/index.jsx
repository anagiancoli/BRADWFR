import ButtonLink from '../Link';
import styles from './style.module.css'

export default function LinksList() {
    const links = [
        {
            label: "Github",
            href: "https://github.com/Victor-Lis",
            color: "#424242ff"
        },
        {
            label: "Linkedin",
            href: "https://www.linkedin.com/in/victor-lis-bronzo",
            color: "#28adabff"
        }
    ]

    return (
        <div className={styles.links}>
            {links.map(link => <ButtonLink {...link} />)}
        </div>
    );
}