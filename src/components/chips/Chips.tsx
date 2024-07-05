import React, { useCallback } from 'react';
import { Chip } from '../chip/Chip';
import AddIcon from '@mui/icons-material/Add';

import styles from './Chips.module.scss';
import { DefaultButton } from '../defaultButton';

export interface ChipsItem {
  src?: string;
  id?: string | number;
  text: string;
}

export interface ChipsProps<T extends ChipsItem = ChipsItem> {
  disabled?: boolean;
  label: string;
  onAdd?: () => void;
  onDelete?: (item: T) => void;
  value: T[];
}

export function Chips<T extends ChipsItem = ChipsItem>({ disabled, label, onAdd, onDelete, value }: ChipsProps<T>) {
  const handleDelete = useCallback(
    (item: T) => {
      if (onDelete) onDelete(item);
    },
    [onDelete]
  );

  return (
    <div
      className={`${styles.chips} ${value.length > 0 ? styles.chips_filled : ''} ${
        disabled ? styles.chips_disabled : ''
      }`}
    >
      <div className={styles.chips__field}>
        <label className={styles.chips__label}>{label}</label>
        {value.map(item => {
          return (
            <Chip
              avatarUrl={item.src}
              key={item.id ?? item.text}
              label={item.text}
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
            icon={<AddIcon />}
            onClick={onAdd}
            variant="withOutBorder"
          />
        )}
      </div>
    </div>
  );
}
