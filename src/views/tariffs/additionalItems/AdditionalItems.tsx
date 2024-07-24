import { useContext } from 'react';
import { Grid } from '@mui/material';
import { Typography } from 'components/typography/Typography';
import { iconList } from 'data/additionals';
import { ScrollContext } from 'context/ScrollContext';

import style from './AdditionalItems.module.scss';

export const AdditionalItems = () => {
  const { additionCleaningItems } = useContext(ScrollContext)!;
  return (
    <div className={style.wrapper} ref={additionCleaningItems}>
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
