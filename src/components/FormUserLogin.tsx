import styles from "../styles/components/FormUserLogin.module.css";

export function FormUserLogin() {
  return (
    <div className={styles.container}>
      <img src="icons/Logo.svg" alt="Logo" />
      <h1>Bem-vindo</h1>
      <p>
        <img src="icons/Github.svg" alt="Github.svg" />
        Faça login com seu Github
        <br />
        para começar
      </p>
      <form>
        <input type="text" placeholder="Digite seu username" id="inputBox" />
        <button disabled>
          <img src="icons/Vector.svg" alt="Seta" />
        </button>
      </form>
    </div>
  );
}
