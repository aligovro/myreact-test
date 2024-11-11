import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.scss';

const HomePage: React.FC = () => {
  return (
    <div className={`container ${styles.homepage}`}>
      <h1 className={styles.homepage__title}>Главная страница</h1>
      <p className={styles.homepage__description}>
        Добро пожаловать на сайт! Выберите товар для просмотра.
      </p>
      <Link to="/product/1" className={styles.homepage__link}>
        Перейти к товару 1
      </Link>
    </div>
  );
};

export default HomePage;
