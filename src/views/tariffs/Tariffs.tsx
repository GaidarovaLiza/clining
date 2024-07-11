import { AdditionalItems } from './additionalItems/AdditionalItems';
import { GeneralCleaning } from './generalClining/GeneralClinig';

import style from './Tariffs.module.scss';

export const Tariffs = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.wrapperTables}>
        <GeneralCleaning />
      </div>
      <AdditionalItems />
    </div>
  );
};
