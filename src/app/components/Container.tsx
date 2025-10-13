import styles from "./page.module.css";

export default async function Container({ children }: { children: React.ReactNode }) {
  return <div className={styles.container}>
    {children}
  </div>;
}