import PropTypes from 'prop-types'
import styles from './style.module.css'

export function TemplateDefault({ children }) {
    return (
        <div>
            <header className={styles.header}>
                <span className={styles.logotipo}> 🚀 LOGOTIPO</span>
            </header>

            <main>
                {children}
            </main>
        </div>
    )
}

TemplateDefault.propTypes = {
    children: PropTypes.node,
}