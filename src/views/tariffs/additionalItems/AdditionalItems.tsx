import { Grid } from '@mui/material';
import style from './AdditionalItems.module.scss';
import { Typography } from '../../../components/typography/Typography';
import { iconList } from '../../../data/additionals';

export const AdditionalItems = () => {
  return (
    <div className={style.wrapper}>
      <Typography variant="h1">Дополнительные услуги</Typography>
      <Grid className={style.grid} container spacing={1} columns={{ xs: 2, sm: 4, md: 12 }}>
        {iconList.map(icon => (
          <Grid key={icon.alt} item xs={0} sm={2} md={4}>
            <img className={style.img} src={icon.src} alt={icon.alt} />
            <Typography className={style.text} variant="semiBold">
              {icon.text}
            </Typography>
            <Typography variant="semiBold">{icon.price}</Typography>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
