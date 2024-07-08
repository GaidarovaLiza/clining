import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import style from './AddCountForm.module.scss';
import { useState } from 'react';
import { IncDecButton } from '../../components/increseDecreseButton/IncDecButton';
import { Typography } from '../../components/typography/Typography';
import { useNavigate } from 'react-router-dom';
import { DefaultButton } from '../../components/defaultButton';
import { AddAdditionslForm } from '../addAdditionForm/AddAdditionalForm';
import { SelectClining } from './selectClining/SelectClining';

const AddCountForm = () => {
  let [roomCount, setRoomCount] = useState(1);
  let [bathRoomCount, setBathRoomCount] = useState(1);
  const navigate = useNavigate();

  const increaseRoomCount = () => {
    setRoomCount(roomCount + 1);
  };

  const decreaseRoomCount = () => {
    roomCount === 1 ? setRoomCount(1) : setRoomCount(roomCount - 1);
  };

  const increaseBathRoomCount = () => {
    setBathRoomCount(bathRoomCount + 1);
  };

  const decreaseBathRoomCount = () => {
    bathRoomCount === 1 ? setBathRoomCount(1) : setBathRoomCount(bathRoomCount - 1);
  };

  const handleCalculate = () => {
    navigate('/send-form');
  };

  const exception = [11, 12, 13, 14];
  const nominativePlural = [2, 3, 4];
  const genetivePlural = [5, 6, 7, 8, 9, 0];

  const declineBathroom = () => {
    if (exception.includes(bathRoomCount)) return 'Санузлов';

    const ending = bathRoomCount % 10;

    if (ending === 1) return 'Санузел';
    if (nominativePlural.includes(ending)) return 'Санузла';
    if (genetivePlural.includes(ending)) return 'Санузлов';
  };

  const declineRoom = () => {
    if (exception.includes(roomCount)) return 'Комнат';

    const ending = roomCount % 10;

    if (ending === 1) return 'Комната';
    if (nominativePlural.includes(ending)) return 'Комнаты';
    if (genetivePlural.includes(ending)) return 'Комнат';
  };

  return (
    <form className={style.form}>
      <div className={style.form_content}>
        <IncDecButton onClick={decreaseRoomCount} content="-" />
        <div className={style.form_text}>
          <Typography className={style.form_typographyText} children={roomCount} variant={'h2'} />
          <Typography children={declineRoom()} variant={'h2'} />
        </div>
        <IncDecButton onClick={increaseRoomCount} content="+" />
      </div>
      <div className={style.form_content}>
        <IncDecButton onClick={decreaseBathRoomCount} content="-" />
        <div className={style.form_text}>
          <Typography className={style.form_typographyText} children={bathRoomCount} variant={'h2'} />
          <Typography children={declineBathroom()} variant={'h2'} />
        </div>
        <IncDecButton onClick={increaseBathRoomCount} content="+" />
      </div>
      <SelectClining />
      <AddAdditionslForm />

      <DefaultButton
        className={style.form_button}
        text="Рассчитать"
        variant="fulfilled"
        icon={<ArrowForwardIcon />}
        onClick={handleCalculate}
        size="huge"
      />
    </form>
  );
};

export default AddCountForm;
