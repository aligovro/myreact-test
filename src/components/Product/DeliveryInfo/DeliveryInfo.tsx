import React from 'react';
import './DeliveryInfo.scss';
import locationIcon from '../../../icons/location.svg';

const formatDate = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric' };
  return date.toLocaleDateString('ru-RU', options);
};

const DeliveryInfo: React.FC = () => {
  const currentDate = new Date();
  const deliveryDate = new Date(currentDate);
  deliveryDate.setDate(currentDate.getDate() + 21);

  const formattedCurrentDate = formatDate(currentDate);
  const formattedDeliveryDate = formatDate(deliveryDate);

  const deliveryYear = deliveryDate.getFullYear();

  return (
    <div className="delivery-info">
      <img src={locationIcon} alt="Location icon" className="delivery-info__icon" />
      <p className="delivery-info__text">
        <span className="delivery-info__bold">
          Доставим: {formattedCurrentDate} - {formattedDeliveryDate} {deliveryYear}
        </span>
        <span className="delivery-info__light">Доставит партнер из Великобритании</span>
      </p>
    </div>
  );
};

export default DeliveryInfo;
