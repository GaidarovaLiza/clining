import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useCalendarStore } from 'store/store';
import { StaticDatePicker } from '@mui/x-date-pickers';
import 'dayjs/locale/ru';

import style from './Calendar.module.scss';

export const Calendar = () => {
  const { selectedDate, setSelectedDate } = useCalendarStore();

  const handleMonthChange = (newMonth: Dayjs) => {
    console.log('newMonth', newMonth);
  };

  const today = dayjs();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ru">
      <StaticDatePicker
        className={style.datePicker}
        value={selectedDate}
        onChange={newValue => setSelectedDate(newValue)}
        onMonthChange={handleMonthChange}
        displayStaticWrapperAs="desktop"
        shouldDisableDate={day => day.isBefore(today, 'day')}
      />
    </LocalizationProvider>
  );
};
