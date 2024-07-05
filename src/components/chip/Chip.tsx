import { Avatar, SvgIcon } from '@mui/material';
import MuiChip, { ChipProps as MuiChipProps } from '@mui/material/Chip';
import { ReactElement } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import style from './Chip.module.scss';

export interface ChipProps extends MuiChipProps {
  avatar?: ReactElement;
  avatarUrl?: string;
}

export const Chip = ({ avatar, avatarUrl, ...props }: ChipProps) => {
  return (
    <MuiChip
      avatar={avatarUrl ? <Avatar src={avatarUrl} /> : avatar ? avatar : undefined}
      classes={{
        root: `${style.muiChip} ${avatarUrl ? style.muiChip_avatar : ''}`,
        label: style.muiChip_label,
        avatar: style.muiChip_avatar,
      }}
      deleteIcon={<SvgIcon className={style.deleteIcon}>{<DeleteIcon />}</SvgIcon>}
      {...props}
    />
  );
};
