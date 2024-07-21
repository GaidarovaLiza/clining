import { AdditionalItems } from './additionalItems/AdditionalItems';
import { GeneralCleaning } from './generalClining/GeneralClinig';
import { MaintenanceCleaning } from './maintenanceCleaning/MaintenanceClinig';

import style from './Tariffs.module.scss';

export const Tariffs = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.wrapperTables}>
        <GeneralCleaning />
      </div>
      <div className={style.wrapperTables}>
        <MaintenanceCleaning />
      </div>
      <AdditionalItems />
    </div>
  );
};
