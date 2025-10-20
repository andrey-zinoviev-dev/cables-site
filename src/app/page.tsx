"use client";
import Image from "next/image";
import styles from "./page.module.css";
import heroImage from "../assets/Rectangle-1.png";
import whoWeAreImage from "../assets/2025-10-08-19.38.51.jpg";
import { advantages, categories } from "@/utils/utils";
import Container from "./components/Container/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import CTA from "./components/CTA/CTA";

export default function Home() {
  const contactInputRef = useRef<HTMLInputElement | null>(null);

  //functions
  function handleCTAClick() {
    contactInputRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });

    setTimeout(() => {
      contactInputRef.current?.focus();
    }, 1000);
  }

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Container>
          <div className={styles.headerContent}>
            <span>logo</span>
            <CTA
              onClick={handleCTAClick}
            />
            {/* <a className={styles.heroButton}>Получить консультацию</a> */}
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
              <CTA
                onClick={handleCTAClick}
              />
              {/* <a className={styles.heroButton} href="#contact-us">Получить консультацию</a> */}
              {/* <button
                className={styles.heroButton}
                onClick={() => {
                  contactInputRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                    inline: "nearest",
                  });

                    setTimeout(() => {
                      contactInputRef.current?.focus();
                    }, 1000);
                }}
              >
                Получить консультацию
              </button> */}
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
                  <li
                    key={advantage.title}
                    className={`${styles.advantageItem} ${styles.manropeTitle}`}
                  >
                    <span className={styles.advantageIndex}>
                      {(index + 1).toString().padStart(2, "0")}.
                    </span>
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
        <section id="contact-us" className={styles.contactUsSection}>
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
                    Заполните, пожалуйста, форму снизу для получаения
                    консультации по любому вопросу, который Вас интересует.
                  </p>
                  <p className={styles.contactUsDescription}>
                    Мы с радостью Вам поможем.
                  </p>
                </div>
                <form className={styles.contactForm}>
                  <input
                    className={styles.contactFormInput}
                    placeholder="Имя"
                    ref={contactInputRef}
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
                <p className={styles.contactUsDescription}>
                  По вопросам к уже оформленным заказам, пожалуйста, свяжитесь с
                  нами по телефону или электронной почте.
                </p>
                <ul className={styles.contactUsList}>
                  <li className={styles.contactUsItem}>
                    <h3
                      className={`${styles.manropeTitle} ${styles.contactUsItemTitle}`}
                    >
                      Обычные обращения
                    </h3>
                    <div className={styles.contactUsItemDescription}>
                      <a
                        className={styles.contactUsItemLink}
                        href="tel:+74951234567"
                      >
                        +7 (495) 123-45-67
                        <FontAwesomeIcon
                          className={styles.linkIcon}
                          icon={faArrowRight}
                        ></FontAwesomeIcon>
                      </a>
                      <a
                        className={styles.contactUsItemLink}
                        href="mailto:info@example.com"
                      >
                        info@example.com
                        <FontAwesomeIcon
                          className={styles.linkIcon}
                          icon={faArrowRight}
                        ></FontAwesomeIcon>
                      </a>
                    </div>
                  </li>
                  <li className={styles.contactUsItem}>
                    <h3
                      className={`${styles.manropeTitle} ${styles.contactUsItemTitle}`}
                    >
                      Срочные обращения
                    </h3>
                    <div className={styles.contactUsItemDescription}>
                      <a
                        className={styles.contactUsItemLink}
                        href="tel:+74951234567"
                      >
                        +7 (495) 123-45-67
                        <FontAwesomeIcon
                          className={styles.linkIcon}
                          icon={faArrowRight}
                        ></FontAwesomeIcon>
                      </a>
                      <a
                        className={styles.contactUsItemLink}
                        href="mailto:info@example.com"
                      >
                        info@example.com
                        <FontAwesomeIcon
                          className={styles.linkIcon}
                          icon={faArrowRight}
                        ></FontAwesomeIcon>
                      </a>
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
      </footer>
    </div>
  );
}
