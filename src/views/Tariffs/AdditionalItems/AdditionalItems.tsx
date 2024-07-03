import { Grid } from '@mui/material';
import style from './AdditionalItems.module.scss';
import Iron from '../../../assets/iron.png';
import Fridge from '../../../assets/fridge.png';
import Dish from '../../../assets/dish.png';
import Balcony from '../../../assets/balcony.png';
import Cat from '../../../assets/cat.png';
import Microwave from '../../../assets/microwave.png';
import Oven from '../../../assets/oven.png';
import Stove from '../../../assets/stove.png';
import Window from '../../../assets/window.png';
import { Typography } from '../../../components/typography/Typography';

const iconList = [
  {
    src: Iron,
    alt: 'iron',
    text: 'ГЛАЖКА',
    price: '25-35 руб',
  },
  {
    src: Fridge,
    alt: 'Fridge',
    text: 'ПОМОЕМ ХОЛОДИЛЬНИК',
    price: '25-35 руб',
  },
  {
    src: Dish,
    alt: 'Dish',
    text: 'ПОМОЕМ ПОСУДУ',
    price: '15-30 руб',
  },
  {
    src: Balcony,
    alt: 'Balcony',
    text: 'УБОРКА БАЛКОНА',
    price: '15-25 руб',
  },
  {
    src: Microwave,
    alt: 'Microwave',
    text: 'ПОМОЕМ МИКРОВОЛНОВКУ',
    price: '15 руб',
  },
  {
    src: Cat,
    alt: 'Cat',
    text: 'УБЕРЕМ ЛОТОК',
    price: '10 руб',
  },
  {
    src: Oven,
    alt: 'Oven',
    text: 'ПОМОЕМ ДУХОВКУ',
    price: '25-30 руб',
  },
  {
    src: Stove,
    alt: 'Stove',
    text: 'ПОМОЕМ ПЛИТУ',
    price: '20 руб',
  },

  {
    src: Window,
    alt: 'Window',
    text: 'ПОМОЕМ ОКНА',
    price: '15 руб - 1 окно',
  },
];

export const AdditionalItems = () => {
  return (
    <div className={style.wrapper}>
      <Typography variant="h1">Дополнительные услуги</Typography>
      <Grid container spacing={1} columns={{ xs: 2, sm: 4, md: 12 }}>
        {iconList.map(icon => (
          <Grid key={icon.alt} item xs={0} sm={2} md={4}>
            <img className={style.img} src={icon.src} alt={icon.alt} />
            <Typography className={style.textColor} variant="semiBold">
              {icon.text}
            </Typography>
            <Typography variant="semiBold">{icon.price}</Typography>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
