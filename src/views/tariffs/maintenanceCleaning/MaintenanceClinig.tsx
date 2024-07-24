import { useContext, useMemo } from 'react';
import { InitialColumnsType, Table } from 'components/table/Table';
import { Typography } from 'components/typography/Typography';
import { ScrollContext } from 'context/ScrollContext';

import style from './MaintenanceClining.module.scss';

type RowType = {
  id: string;
  room: string;
  price: string;
};

export const MaintenanceCleaning = () => {
  const { maintenanceCleaningRef } = useContext(ScrollContext)!;
  const initialColumns = useMemo(() => {
    const res: Array<InitialColumnsType<RowType>> = [
      { label: 'Количество комнат', data: 'room', width: 600 },
      { label: 'Цена', data: 'price', width: 200 },
    ];
    return res;
  }, []);

  const data = useMemo(() => {
    return [
      {
        id: '1',
        room: '1 комната (студия)',
        price: '85 р',
      },
      {
        id: '2',
        room: '1 комната (кухня + комната)',
        price: '90-100 р',
      },
      {
        id: '3',
        room: '2 комнаты (до 45 кв. м.)',
        price: '110 р',
      },
      {
        id: '4',
        room: '2 комнаты (45+ кв. м.)',
        price: '130 р',
      },
      {
        id: '5',
        room: '3 комнаты (до 60 кв. м.)',
        price: '150 р',
      },
      {
        id: '6',
        room: '3 комнаты (70+ кв. м.)',
        price: '160-190 р',
      },
    ];
  }, []);

  return (
    <div>
      <div ref={maintenanceCleaningRef} className={style.textWrapper}>
        <Typography variant="h1">Поддерживающая уборка</Typography>
        <Typography className={style.subTitle} variant="h2">
          Сухая и влажная уборка поверхностей
        </Typography>
      </div>
      <Table<RowType> initialColumns={initialColumns} rows={data} />
    </div>
  );
};
