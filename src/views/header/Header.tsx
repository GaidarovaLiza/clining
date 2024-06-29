import style from './Header.module.scss';
import { Icon } from './Icon/Icon';
import loonIcon from '../../assets/loon-icon.svg';
import viberIcon from '../../assets/viber-icon.svg';
import whatsApp from '../../assets/whatsapp-icon.svg';
import { Typography } from '../../components/typography/Typography';
import { Link, Paper } from '@mui/material';
import { AppBar, Box, Drawer, IconButton, Toolbar } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
const iconData = [
  {
    src: loonIcon,
    href: 'https://t.me',
    alt: 'telegram',
  },
  {
    src: viberIcon,
    href: 'https://viber.com',
    alt: 'viber',
  },
  {
    src: whatsApp,
    href: 'https://whatsapp.com',
    alt: 'whatsApp',
  },
];

export const Header = () => {
  const [openDrower, setOpenDrower] = useState(false);

  return (
    <>
      <AppBar position="static">
        <Drawer anchor="right" variant="temporary" open={openDrower} onClose={() => setOpenDrower(false)}>
          <Box>
            <Paper className={style.paper}></Paper>
          </Box>
        </Drawer>
      </AppBar>
      <div className={style.wrapper}>
        <div className={style.container}>
          <div className={style.logo}>
            <Typography className={style.mobileContent} children={'LOGO'} variant="h1" />
          </div>
          <div className={style.iconContainer}>
            <IconButton
              edge="start"
              className={openDrower ? style.hideMenu : ''}
              color="default"
              aria-label="open drawer"
              onClick={() => setOpenDrower(!openDrower)}
              sx={{ mr: 2, display: { xs: 'block', sm: 'none' } }}
            >
              <MenuIcon fontSize="large" />
            </IconButton>
            <Link>
              <Typography className={style.mobileContent} children={'+375 29 181 5595'} variant="h3" />
            </Link>
            {iconData.map(icon => (
              <Icon className={style.mobileContent} src={icon.src} alt={icon.alt} href={icon.href} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
