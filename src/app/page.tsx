import Image from "next/image";
import styles from "./page.module.css";
import heroImage from "../assets/Rectangle-1.png";
import whoWeAreImage from "../assets/2025-10-08-19.38.51-1.png";
import { advantages, categories } from "@/utils/utils";
import Container from "./components/Container";

export default function Home() {
  return (
    <div className={styles.page}>
      <header>
        <span>logo</span>
        <button></button>
      </header>
      <main className={styles.main}>
        <section>
          <Container>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                Комплексное решение поставок кабеля для любых задач и объемов
              </h1>
              <p className={styles.heroDescription}>
                Мы, официальный дилер Подольсккабель, обеспечиваем полное
                сопровождение поставок — от консультации до доставки с
                соблюдением сроков и стандартов качества по всей России
              </p>
              <button className={styles.heroButton}>
                Получить консультацию
              </button>
            </div>
          </Container>
          <Image
            className={styles.heroImage}
            src={heroImage}
            alt="Hero image"
            width={1000}
            // height={1000}
          />
        </section>
        <section>
          <Container>
            <div className={styles.whoWeAreContent}>
              <h2 className={styles.whoWeAreTitle}>Кто мы</h2>
              <p className={styles.whoWeAreDescription}>
                «Электрокабель» — официальный дилер Подольсккабель. Работаем
                напрямую с заводом-изготовителем, поэтому вы получаете продукцию
                по выгодной цене, без задержек и с гарантией качества по ГОСТ.
                Эти принципы определяют наши ключевые преимущества.
              </p>
              <ul className={styles.advantagesList}>
                {advantages.map((advantage, index) => (
                  <li key={advantage.title} className={styles.advantageItem}>
                    <span>{(index + 1).toString().padStart(2, "0")}.</span>
                    <h3 className={styles.advantageTitle}>{advantage.title}</h3>
                    <p className={styles.advantageDescription}>
                      {advantage.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </section>
        <section>
          <Container>
            <div>
              <h2 className={styles.whoWeAreTitle}>
                Категории кабельной продукции
              </h2>
              <ul>
                {categories.map((category) => {
                  return (
                    <li key={category.title}>
                      <Image src={category.cover} alt={category.title} width={100} height={100} />
                      {/* <Image src={category.cover} alt={category.title} width={100} height={100} /> */}
                      <p>{category.title}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Container>
        </section>
        <section>
          <div>
            <h2>Связаться с нами</h2>
            <form>
              <input></input>
              <input></input>
              <input></input>
              <input></input>
              <button type="submit">Отправить сообщение</button>
            </form>
          </div>
        </section>
        {/* <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol>
          <li>
            Get started by editing <code>src/app/page.tsx</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Read our docs
          </a>
        </div> */}
      </main>
      <footer className={styles.footer}>
        <span>© 2025 Электро - Кабель </span>
        <div>
          <span>ИНН: 123456789012</span>
          <span>ОГРН: 123456789012345</span>
        </div>
        {/* <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a> */}
      </footer>
    </div>
  );
}
