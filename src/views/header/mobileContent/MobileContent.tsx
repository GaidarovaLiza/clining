import { Link } from '@mui/material';
import { Typography } from '../../../components/typography/Typography';
import { iconData } from '../Header';
import { Icon } from '../Icon/Icon';

import style from './MobileContent.module.scss';

interface MobileContent {
  onScrollDownToGeneralCleaning: () => void;
  onScrollDownToAdditionItems: () => void;
}

export const MobileContent = ({ onScrollDownToGeneralCleaning, onScrollDownToAdditionItems }: MobileContent) => {
  return (
    <div className={style.wrapper}>
      <div className={style.wrapper_block}>
        <Typography variant="h2">Контактная информация:</Typography>
      </div>
      <Link>
        <Typography className={style.wrapper_padding} variant="h3">
          +375 29 181 5595
        </Typography>
      </Link>
      <div>
        {iconData.map(icon => (
          <Icon className={style.wrapper_mobileContent} src={icon.src} alt={icon.alt} href={icon.href} />
        ))}
      </div>
      <div className={style.wrapper_block}>
        <Typography variant="h2">Наши услуги:</Typography>
      </div>
      <Link>
        <Typography
          isCursorPointer={true}
          onClick={onScrollDownToGeneralCleaning}
          className={style.wrapper_padding}
          variant="h3"
        >
          Генеральная уборка
        </Typography>
      </Link>
      <Link>
        <Typography className={style.wrapper_padding} variant="h3">
          Поддерживающая уборка
        </Typography>
      </Link>
      <Link>
        <Typography
          className={style.wrapper_padding}
          isCursorPointer={true}
          onClick={onScrollDownToAdditionItems}
          variant="h3"
        >
          Дополнительные услуги
        </Typography>
      </Link>
    </div>
  );
};
