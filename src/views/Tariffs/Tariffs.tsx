import { AdditionalItems } from './AdditionalItems/AdditionalItems';
import { GeneralClining } from './GeneralClining/GeneralClinig';
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
