import { ComponentPropsWithRef } from "react";
import styles from "./page.module.css";

type CTAProps = ComponentPropsWithRef<"button">;

export default function CTA({ ...props }: CTAProps) {
  return (
    <button
    {...props}
      className={styles.heroButton}
    >
      Получить консультацию
    </button>
  );
}