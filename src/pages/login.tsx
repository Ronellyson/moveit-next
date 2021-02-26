import styles from "../styles/pages/Login.module.css";
import { FormUserLogin} from "../components/FormUserLogin";
import { SimbolLoginPage } from "../components/SimbolLoginPage"

export function Login() {
  return(
    <div className={styles.overlay}>
      <div className = {styles.container}>
        <SimbolLoginPage />
        <FormUserLogin />
      </div>
    </div>
  )
}
