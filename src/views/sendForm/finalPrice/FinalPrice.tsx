import { DefaultButton } from '../../../components/defaultButton';
import { Typography } from '../../../components/typography/Typography';
import { useRoomCountStore } from '../../../store/store';
import style from './FinalPrice.module.scss';

export const FinalPrice = () => {
  const { maintenancePrice, roomCount, bathRoomCount } = useRoomCountStore();
  return (
    <div className={style.wrapper}>
      <Typography variant="h2">{`Уборка квартиры с ${roomCount} жилой комнаты и ${bathRoomCount} ванной комнатой, кухня, коридор`}</Typography>
      <Typography variant="h3">{`К оплате: ${maintenancePrice} рублей`}</Typography>
      <DefaultButton className={style.wrapper_button} size="huge" variant="fulfilled" text="Заказать" />
    </div>
  );
};
