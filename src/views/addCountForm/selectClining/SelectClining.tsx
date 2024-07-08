import { useState } from 'react';
import { Checkbox } from '../../../components/checkBoxs/CheckBox';
import { Typography } from '../../../components/typography/Typography';
import style from './SelectClining.module.scss';

export const SelectClining = () => {
  const [general, setGeneral] = useState(false);
  const [supportive, setSupportive] = useState(false);

  return (
    <div className={style.contentWrapper}>
      <div className={style.contentWrapper_item}>
        <Checkbox checked={general} onChange={() => setGeneral(!general)} />
        <Typography className={style.contentWrapper_text} variant={'h3'}>
          Генеральная уборка
        </Typography>
      </div>
      <div className={style.contentWrapper_item}>
        <Checkbox checked={supportive} onChange={() => setSupportive(!supportive)} />
        <Typography className={style.contentWrapper_text} variant={'h3'}>
          Поддерживающая уборка
        </Typography>
      </div>
    </div>
  );
};
