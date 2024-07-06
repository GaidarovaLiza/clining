import React, { useCallback, useState } from 'react';
import { Chip } from '../chip/Chip';
import AddIcon from '@mui/icons-material/Add';

import styles from './Chips.module.scss';
import { DefaultButton } from '../defaultButton';
import { SvgIcon } from '@mui/material';

export interface ChipsItem {
  src?: string;
  id: string | number;
  text: string;
  isAdded?: boolean;
}

export interface ChipsProps<T extends ChipsItem = ChipsItem> {
  disabled?: boolean;
  label: string;
  onAdd?: () => void;
  onDelete?: (item: T) => void;
  value: T[];
}

export function Chips<T extends ChipsItem = ChipsItem>({ disabled, label, onAdd, onDelete, value }: ChipsProps<T>) {
  const [iconItems, setIconItems] = useState<{ [key: string]: boolean }>({});

  const handleDelete = useCallback(
    (item: T) => {
      setIconItems(prev => ({
        ...prev,
        [item.id]: !prev[item.id],
      }));

      if (onDelete) onDelete(item);
    },
    [onDelete]
  );

  const sortedValue = [...value].sort((a, b) => {
    if (iconItems[a.id]) return -1;
    if (iconItems[b.id]) return 1;
    return 0;
  });

  return (
    <div
      className={`${styles.chips} ${value.length > 0 ? styles.chips_filled : ''} ${
        disabled ? styles.chips_disabled : ''
      }`}
    >
      <div className={styles.chips__field}>
        <label className={styles.chips__label}>{label}</label>
        {sortedValue.map(item => {
          return (
            <Chip
              avatarUrl={item.src}
              key={item.id ?? item.text}
              label={item.text}
              isAdded={iconItems[item.id]}
              onDelete={disabled ? undefined : () => handleDelete(item)}
            />
          );
        })}
      </div>
      <div className={styles.chips__controls}>
        {!!onAdd && (
          <DefaultButton
            className={styles.chips__addButton}
            disabled={disabled}
            icon={
              <SvgIcon>
                <AddIcon />
              </SvgIcon>
            }
            onClick={onAdd}
            variant="withOutBorder"
          />
        )}
      </div>
    </div>
  );
}
