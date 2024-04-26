import PropTypes from 'prop-types'
import styles from './button.module.css'


export function Button({ children, ...rest }) {
    return <button className={styles.button} {...rest}>{children}</button>
}

Button.propTypes = {
    children: PropTypes.node,
}
