import { Button } from "../components/atoms/button";
import { FormControl } from "../components/molecules/form-control";

import styles from './style.module.css' 

export function Register() {
    return (
        <div className={styles.container}>
            <form>
                <FormControl labelText="Nome" placeholder="Informe seu nome" />
                <FormControl labelText="Sobrenome" placeholder="Informe seu ultimo nome" />
                <FormControl labelText="Email" placeholder="Informe seu e-mail" />
            </form>
            <Button>Cadastrar</Button>
        </div>
    )
}