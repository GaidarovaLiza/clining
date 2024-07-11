import { ReactElement } from 'react';
import { Avatar, SvgIcon } from '@mui/material';
import MuiChip, { ChipProps as MuiChipProps } from '@mui/material/Chip';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

import style from './Chip.module.scss';

export interface ChipProps extends MuiChipProps {
  avatar?: ReactElement;
  avatarUrl?: string;
  isAdded?: boolean;
}

export const Chip = ({ avatar, avatarUrl, isAdded, ...props }: ChipProps) => {
  return (
    <MuiChip
      avatar={avatarUrl ? <Avatar src={avatarUrl} /> : avatar ? avatar : undefined}
      classes={{
        root: `${style.muiChip} ${avatarUrl ? style.muiChip_avatar : ''}`,
        label: style.muiChip_label,
        avatar: style.muiChip_avatar,
      }}
      deleteIcon={
        isAdded ? (
          <SvgIcon className={style.deleteIcon}>{<DeleteIcon />}</SvgIcon>
        ) : (
          <SvgIcon className={style.deleteIcon}>
            <AddIcon />
          </SvgIcon>
        )
      }
      {...props}
    />
  );
};
