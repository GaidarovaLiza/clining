import { useContext, useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { Typography } from 'components/typography/Typography';
import { iconList } from 'data/additionals';
import { ScrollContext } from 'context/ScrollContext';
import { useAdditionalItemsStore, useRoomCountStore } from 'store/store';

import style from './AdditionalItems.module.scss';

export const AdditionalItems = () => {
  const { additionCleaningItems } = useContext(ScrollContext)!;
  const { addMaintenancePrice } = useRoomCountStore();
  const { selectedItemPrice, setSelectedItemPrice } = useAdditionalItemsStore();

  useEffect(() => {}, [selectedItemPrice, addMaintenancePrice]);

  const handleClick = (icon: any) => {
    const priceNumber = parseInt(icon.price.replace(/\s|руб/g, ''));
    setSelectedItemPrice(priceNumber);

    icon.isAdded ? addMaintenancePrice(-priceNumber) : addMaintenancePrice(priceNumber);
    icon.isAdded = !icon.isAdded;
  };

  return (
    <div className={style.wrapper} ref={additionCleaningItems}>
      <Typography variant="h1">Выберите опции для Вашей уборки:</Typography>
      <Grid className={style.grid} container spacing={1} columns={{ xs: 2, sm: 4, md: 12 }}>
        {iconList.map(icon => (
          <Grid
            key={icon.alt}
            item
            xs={0}
            sm={2}
            md={4}
            className={icon.isAdded ? `${style.gridItem} ${style.selectedItem}` : style.gridItem}
          >
            <div className={style.link} onClick={() => handleClick(icon)}>
              <img className={style.img} src={icon.src} alt={icon.alt} />
              <Typography className={style.text} variant="semiBold">
                {icon.text}
              </Typography>
              <div className={style.priceBlock}>
                <Typography variant="semiBold">{icon.price}</Typography>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
