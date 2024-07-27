import { Calendar } from 'views/calendar/Calendar';
import style from './SendForm.module.scss';
import { FinalPrice } from './finalPrice/FinalPrice';

const SendForm = () => {
  return (
    <form className={style.form}>
      <Calendar />
      <FinalPrice />
    </form>
  );
};

export default SendForm;
