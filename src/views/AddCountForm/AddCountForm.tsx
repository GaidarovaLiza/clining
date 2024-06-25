import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import style from './AddCountForm.module.scss';
import { useState } from 'react';
import { IncDecButton } from '../../components/IncDecButton';
import { Typography } from '../../components/typography/Typography';
import { DefaultButton } from '../../components/defaultButton/DefaultButton';
import { useNavigate } from 'react-router-dom';

export const AddCountForm = () => {
  let [roomCount, setRoomCount] = useState(1);
  let [bathRoomCount, setBathRoomCount] = useState(1);
  const navigate = useNavigate();

  const increaseRoomCount = () => {
    setRoomCount(roomCount + 1);
  };

  const decreaseRoomCount = () => {
    setRoomCount(roomCount - 1);
  };

  const increaseBathRoomCount = () => {
    setBathRoomCount(bathRoomCount + 1);
  };

  const decreaseBathRoomCount = () => {
    setBathRoomCount(bathRoomCount - 1);
  };

  const handleCalculate = () => {
    navigate('/send-form');
  };

  return (
    <form className={style.form}>
      <div className={style.content}>
        <IncDecButton onClick={decreaseRoomCount} content="-" />
        <div className={style.text}>
          <Typography className={style.typographyText} children={roomCount} variant={'h2'} />
          <Typography children={'Комната'} variant={'h2'} />
        </div>
        <IncDecButton onClick={increaseRoomCount} content="+" />
      </div>
      <div className={style.content}>
        <IncDecButton onClick={decreaseBathRoomCount} content="-" />
        <div className={style.text}>
          <Typography className={style.typographyText} children={bathRoomCount} variant={'h2'} />
          <Typography children={'Санузел'} variant={'h2'} />
        </div>
        <IncDecButton onClick={increaseBathRoomCount} content="+" />
      </div>
      <DefaultButton
        className={style.button}
        text="Рассчитать"
        variant="fulfilled"
        icon={<ArrowForwardIcon />}
        onClick={handleCalculate}
        size="huge"
      />
    </form>
  );
};
