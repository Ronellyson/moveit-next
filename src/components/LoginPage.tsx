import styles from "../styles/components/LoginPage.module.css";

export function LoginPage() {
  return (
    <div className={styles.overlay}>
      <img src="icons/simbolo.svg" alt="simbolo.svg"  className={styles.simbol}/>
      <div className={styles.container}>
        <h1>Bem-vindo</h1>
        <p>
          <img src="icons/Github.svg" alt="Github.svg" />
          Faça login com seu Github para começar
        </p>
        <form>
          <input type="text" placeholder="Digite seu username"/>
          <button></button>
        </form>
      </div>
    </div>
  );
}
