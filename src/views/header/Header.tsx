import { useState, useContext } from 'react';
import { AppBar, Box, Drawer, IconButton, Link, Paper } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { ScrollContext } from 'context/ScrollContext';
import { Icon } from './Icon/Icon';
import loonIcon from 'assets/loon-icon.svg';
import viberIcon from 'assets/viber-icon.svg';
import whatsApp from 'assets/whatsapp-icon.svg';
import logo from 'assets/logo.png';
import { Typography } from 'components/typography/Typography';
import { MobileContent } from './mobileContent/MobileContent';

import style from './Header.module.scss';

export const iconData = [
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
  const [openDrawer, setOpenDrawer] = useState(false);
  const { generalCleaningRef, additionCleaningItems } = useContext(ScrollContext)!;

  const scrollToGeneralCleaning = () => {
    setOpenDrawer(false);
    generalCleaningRef?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAdditionCleaningItems = () => {
    setOpenDrawer(false);
    additionCleaningItems?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <AppBar position="static">
        <Drawer anchor="right" variant="temporary" open={openDrawer} onClose={() => setOpenDrawer(false)}>
          <Box>
            <Paper
              sx={{
                boxShadow: 'none',
              }}
              className={style.paper}
            >
              <MobileContent
                onScrollDownToGeneralCleaning={scrollToGeneralCleaning}
                onScrollDownToAdditionItems={scrollToAdditionCleaningItems}
              />
            </Paper>
          </Box>
        </Drawer>
      </AppBar>
      <div className={style.wrapper}>
        <div className={style.container}>
          <div className={style.logo}>
            {openDrawer ? (
              <div key="mobileContent" className={style.mobileContent}></div>
            ) : (
              <Icon key="logo" className={style.logoImg} src={logo} alt={'Logo'} />
            )}
          </div>
          <div className={style.iconContainer}>
            <IconButton
              edge="start"
              className={openDrawer ? style.hideMenu : ''}
              color="default"
              aria-label="open drawer"
              onClick={() => setOpenDrawer(!openDrawer)}
              sx={{ mr: 2, display: { xs: 'block', sm: 'none' } }}
            >
              <MenuIcon fontSize="large" />
            </IconButton>
            <Link>
              <Typography className={style.mobileContent} children={'+375 29 181 5595'} variant="h3" />
            </Link>
            {iconData.map(icon => (
              <Icon key={icon.src} className={style.mobileContent} src={icon.src} alt={icon.alt} href={icon.href} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
