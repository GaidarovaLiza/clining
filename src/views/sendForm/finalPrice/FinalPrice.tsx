import { useCallback, useState } from 'react';
import { DefaultButton } from 'components/defaultButton';
import { Typography } from 'components/typography/Typography';
import { useRoomCountStore } from 'store/store';
import { useMediaQuery } from 'react-responsive';
import { declineChosenRoom, declineChosenBathroom } from 'utils/utils';
import { Modal } from 'components/modal/Modal';
import { Input } from 'components/Input';

import style from './FinalPrice.module.scss';

export const FinalPrice = () => {
  const { maintenancePrice, roomCount, bathRoomCount } = useRoomCountStore();
  const isDesktop = useMediaQuery({ minWidth: 1000 });
  const [open, setOpen] = useState(false);
  const [name, setName] = useState();
  const [phoneNum, setPhoneNum] = useState();

  const buttonText = isDesktop ? 'Заказать' : `Заказать за ${maintenancePrice} BYN`;

  return (
    <div className={style.wrapper}>
      <Typography variant="h2">
        {`Вы выбрали уборку ${roomCount} ${declineChosenRoom(roomCount)}, ${bathRoomCount} ${declineChosenBathroom(bathRoomCount)}, кухни и коридора`}
      </Typography>
      <Typography className={style.wrapper_payText} variant="h3">{`К оплате: ${maintenancePrice} рублей`}</Typography>
      <DefaultButton
        className={style.wrapper_button}
        onClick={() => setOpen(true)}
        size="huge"
        variant="fulfilled"
        text={buttonText}
      />
      <Modal
        buttons={<DefaultButton variant="fulfilled" text="Отправить" />}
        subtitle=" Мы свяжемся с Вами в течении 15 минут"
        open={open}
        header="Заполните форму для обратной связи:"
        onClose={() => setOpen(false)}
      >
        <div className={style.wrapper_modalWrapper}>
          <Input variant="filled" label="Ваше имя:" value={name} onChange={e => {}} />
          <Input variant="filled" label="Номер телефона:" value={phoneNum} onChange={e => {}} />
        </div>
      </Modal>
    </div>
  );
};
