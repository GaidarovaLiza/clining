import { DefaultButton } from 'components/defaultButton';
import { Typography } from 'components/typography/Typography';
import { useRoomCountStore } from 'store/store';
import { useMediaQuery } from 'react-responsive';
import { declineChosenRoom, declineChosenBathroom } from 'utils/utils';

import style from './FinalPrice.module.scss';

export const FinalPrice = () => {
  const { maintenancePrice, roomCount, bathRoomCount } = useRoomCountStore();
  const isDesktop = useMediaQuery({ minWidth: 1000 });

  const buttonText = isDesktop ? 'Заказать' : `Заказать за ${maintenancePrice} BYN`;

  return (
    <div className={style.wrapper}>
      <Typography variant="h2">
        {`Вы выбрали уборку ${roomCount} ${declineChosenRoom(roomCount)}, ${bathRoomCount} ${declineChosenBathroom(bathRoomCount)}, кухни и коридора`}
      </Typography>
      <Typography className={style.wrapper_payText} variant="h3">{`К оплате: ${maintenancePrice} рублей`}</Typography>
      <DefaultButton className={style.wrapper_button} size="huge" variant="fulfilled" text={buttonText} />
    </div>
  );
};
