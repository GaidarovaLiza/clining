import { Typography } from '../../../components/typography/Typography';
import style from './MobileContent.module.scss';
import { iconData } from '../Header';
import { Link } from '@mui/material';
import { Icon } from '../Icon/Icon';

export const MobileContent = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.block}>
        <Typography variant="h2">Контактная информация:</Typography>
      </div>
      <Link>
        <Typography className={style.padding} variant="h3">
          +375 29 181 5595
        </Typography>
      </Link>
      <div>
        {iconData.map(icon => (
          <Icon className={style.mobileContent} src={icon.src} alt={icon.alt} href={icon.href} />
        ))}
      </div>
      <div className={style.block}>
        <Typography variant="h2">Наши услуги:</Typography>
      </div>
      <Link>
        <Typography className={style.padding} variant="h3">
          Гениральная уборка
        </Typography>
      </Link>
      <Link>
        <Typography className={style.padding} variant="h3">
          Поддерживающая уборка
        </Typography>
      </Link>
      <Link>
        <Typography className={style.padding} variant="h3">
          Дополнительные услуги
        </Typography>
      </Link>
    </div>
  );
};
