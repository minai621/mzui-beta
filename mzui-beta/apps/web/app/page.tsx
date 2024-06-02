import { tokens } from "token-generate";
import styles from "./page.module.css";

export default function Page(): JSX.Element {
  return (
    <main className={styles.main}>
      {Object.entries(tokens).map(([category, values]) => (
        <section key={category}>
          <h2>{category}</h2>
          <ul>
            {Object.entries(values).map(([name, value]) => (
              <li key={name}>
                <strong>{name}</strong>: {value}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
}
