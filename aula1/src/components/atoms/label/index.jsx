import styles from './style.module.css'

export function Label(props) {
    return <label className={styles.label} {...props} />
}