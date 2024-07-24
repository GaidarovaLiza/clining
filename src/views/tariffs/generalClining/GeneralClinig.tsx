import { useContext, useMemo } from 'react';
import { InitialColumnsType, Table } from 'components/table/Table';
import { Typography } from 'components/typography/Typography';
import { ScrollContext } from 'context/ScrollContext';

import style from './GeneralClining.module.scss';

type RowType = {
  id: string;
  room: string;
  price: string;
};

export const GeneralCleaning = () => {
  const { generalCleaningRef } = useContext(ScrollContext)!;
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
        price: '280-315 р',
      },
      {
        id: '2',
        room: '1 комната (кухня + комната)',
        price: '300-320 р',
      },
      {
        id: '3',
        room: '2 комнаты (до 45 кв. м.)',
        price: '320-350 р',
      },
      {
        id: '4',
        room: '2 комнаты (45+ кв. м.)',
        price: '330-360 р',
      },
      {
        id: '5',
        room: '3 комнаты (до 60 кв. м.)',
        price: '350-400 р',
      },
      {
        id: '6',
        room: '3 комнаты (70+ кв. м.)',
        price: '450+ р',
      },
    ];
  }, []);

  return (
    <div>
      <div ref={generalCleaningRef} className={style.textWrapper}>
        <Typography variant="h1">Генеральная уборка</Typography>
        <Typography className={style.subTitle} variant="h2">
          Влажная и сухая уборка квартиры, бытовой техники, шкафов, лоджии
        </Typography>
      </div>
      <Table<RowType> initialColumns={initialColumns} rows={data} />
    </div>
  );
};
