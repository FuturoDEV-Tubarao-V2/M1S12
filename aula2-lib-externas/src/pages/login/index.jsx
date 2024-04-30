import { Button, TextField } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'

import styles from './style.module.css'

export function Login() {
    const navigate = useNavigate()
    
    function signIn() {
        // logica de login aqui 
        // deu certo
        navigate("/home")
        // navigate(-1)
    }

    return (
        <div className={styles.container}>
            <img src="/logotipo.png" alt="LABmoney - 365" />
            <form className={styles.form} autoComplete='off'>
                <h1>Efetuar login</h1>
                <TextField id="outline-basic" label="E-mail" type="email" variant="outlined" />
                <TextField id="outline-basic" label="Senha" type='password' variant="outlined" />
                <Button variant="contained" size="large" onClick={signIn}>Entrar</Button>
                
                <Link to="/usuarios/1">Visualizar usuario</Link>
            </form>
        </div>
    )
}