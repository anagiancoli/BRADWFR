import styles from './style.module.css'

export default function ButtonLink({ label, href, color }) {
    return (
        <a href={href} target='_blank' className={styles.linkButton} style={{ backgroundColor: color }}>
            {label}
        </a>
    );
}