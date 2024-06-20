import style from "./Header.module.scss";
import { Icon } from "./Icon/Icon";
import loonIcon from "../../assets/loon-icon.svg";
import viberIcon from "../../assets/viber-icon.svg";
import whatsApp from "../../assets/whatsapp-icon.svg";
import { Typography } from "../../components/typography/Typography";
import { Link } from "@mui/material";

const iconData = [
  {
    src: loonIcon,
    href: "https://t.me",
    alt: "telegram",
  },
  {
    src: viberIcon,
    href: "https://viber.com",
    alt: "viber",
  },
  {
    src: whatsApp,
    href: "https://whatsapp.com",
    alt: "whatsApp",
  },
];

export const Header = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.logo}>
          <Typography children={"LOGO"} variant="h1" />
        </div>
        <div className={style.iconContainer}>
          <Link>
            <Typography children={"+375 29 181 5595"} variant="h3" />
          </Link>
          {iconData.map((icon) => (
            <Icon src={icon.src} alt={icon.alt} href={icon.href} />
          ))}
        </div>
      </div>
    </div>
  );
};
