import { AdditionalItems } from './additionalItems/AdditionalItems';
import { GeneralClining } from './generalClining/GeneralClinig';
import style from './Tariffs.module.scss';

export const Tariffs = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.wrapperTables}>
        <GeneralClining />
      </div>
      <AdditionalItems />
    </div>
  );
};
