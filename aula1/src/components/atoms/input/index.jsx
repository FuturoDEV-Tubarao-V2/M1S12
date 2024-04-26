import styles from './style.module.css'

export function Input(props) {
    return <input className={styles.input} {...props} />
}