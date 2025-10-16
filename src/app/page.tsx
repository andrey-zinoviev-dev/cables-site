import Image from "next/image";
import styles from "./page.module.css";
import heroImage from "../assets/Rectangle-1.png";
import whoWeAreImage from "../assets/2025-10-08-19.38.51.jpg";
import { advantages, categories } from "@/utils/utils";
import Container from "./components/Container";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Container>
          <div className={styles.headerContent}>
            <span>logo</span>
            <button className={styles.heroButton}>Получить консультацию</button>
          </div>
        </Container>
      </header>
      <main className={styles.main}>
        <section>
          <Container>
            <div className={styles.heroContent}>
              <h1 className={`${styles.heroTitle} ${styles.manropeTitle}`}>
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
              <div className={styles.whoWeAreDescriptionContent}>
                <h2
                  className={`${styles.whoWeAreTitle} ${styles.manropeTitle}`}
                >
                  Кто мы
                </h2>
                <p className={styles.whoWeAreDescription}>
                  «Электрокабель» — официальный дилер Подольсккабель. Работаем
                  напрямую с заводом-изготовителем, поэтому вы получаете
                  продукцию по выгодной цене, без задержек и с гарантией
                  качества по ГОСТ. Эти принципы определяют наши ключевые
                  преимущества.
                </p>
              </div>
              <ul className={styles.advantagesList}>
                {advantages.map((advantage, index) => (
                  <li key={advantage.title} className={styles.advantageItem}>
                    <span>{(index + 1).toString().padStart(2, "0")}.</span>
                    <h3
                      className={`${styles.advantageTitle} ${styles.manropeTitle}`}
                    >
                      {advantage.title}
                    </h3>
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
            <div className={styles.categoriesContent}>
              <h2 className={`${styles.whoWeAreTitle} ${styles.manropeTitle}`}>
                Категории кабельной продукции
              </h2>
              <ul className={styles.categoriesList}>
                {categories.map((category) => {
                  return (
                    <li key={category.title} className={styles.categoryItem}>
                      <Image
                        className={styles.categoryCover}
                        src={category.cover}
                        alt={category.title}
                        width={100}
                        height={100}
                      />
                      {/* <Image src={category.cover} alt={category.title} width={100} height={100} /> */}
                      <p
                        className={`${styles.categoryTitle} ${styles.manropeTitle}`}
                      >
                        {category.title}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Container>
        </section>
        <section>
          <Container>
            <div className={styles.contactUsContent}>
              <div className={styles.contactUsDescriptionContent}>
                <h2
                  className={`${styles.whoWeAreTitle} ${styles.manropeTitle}`}
                >
                  Связаться с нами
                </h2>
                <div className={styles.contactUsDescriptionContainer}>
                  <p className={styles.contactUsDescription}>
                    По всем интересующим Вас вопросам, пожалуйста, заполните
                    форму снизу.
                  </p>
                  <p className={styles.contactUsDescription}>
                    Мы с радостью Вас проконсультируем.
                  </p>
                </div>
                <form className={styles.contactForm}>
                  <input
                    className={styles.contactFormInput}
                    placeholder="Имя"
                  ></input>
                  <input
                    className={styles.contactFormInput}
                    placeholder="Телефон"
                  ></input>
                  <input
                    className={styles.contactFormInput}
                    placeholder="Почта"
                  ></input>
                  <textarea
                    className={styles.contactFormTextarea}
                    placeholder="Сообщение"
                  ></textarea>
                  <button className={styles.contactFormButton} type="submit">
                    Отправить сообщение
                  </button>
                </form>
              </div>
              <div className={styles.contactUsImageContainer}>
                <ul className={styles.contactUsList}>
                  <li className={styles.contactUsItem}>
                    <h3 className={`${styles.manropeTitle} ${styles.contactUsItemTitle}`}>Обычные обращения</h3>
                    <div className={styles.contactUsItemDescription}>
                      <span>+7 (495) 123-45-67</span>
                      <span>info@example.com</span>
                    </div>
                  </li>
                  <li className={styles.contactUsItem}>
                    <h3 className={`${styles.manropeTitle} ${styles.contactUsItemTitle}`}>Срочные обращения</h3>
                    <div className={styles.contactUsItemDescription}>
                      <span>+7 (495) 123-45-67</span>
                      <span>info@example.com</span>
                    </div>
                  </li>
                </ul>
                <Image
                  className={styles.contactUsImage}
                  src={whoWeAreImage}
                  alt="Contact us image"
                  width={1000}
                />
              </div>
            </div>
          </Container>
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
        <Container>
          <div className={styles.footerContent}>
            <span>© 2025 Электро - Кабель </span>
            <div>
              <span>ИНН: 123456789012</span>
              <span>ОГРН: 123456789012345</span>
            </div>
          </div>
        </Container>

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
