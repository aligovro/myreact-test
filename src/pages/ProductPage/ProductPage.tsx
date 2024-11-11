import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './ProductPage.module.scss';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className={`container ${styles['product-page']}`}>
      <h1 className={styles['product-page__title']}>Страница товара</h1>
      <p className={styles['product-page__info']}>Информация о товаре с ID: {id}</p>

      <button className={styles['product-page__button']}>Купить</button>
    </div>
  );
};

export default ProductPage;
