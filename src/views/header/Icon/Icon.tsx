import style from './Icon.module.scss';

type IconType = {
  src: string;
  alt: string;
  href: string;
};

export const Icon = ({ src, alt, href }: IconType) => {
  return (
    <a href={href}>
      <img className={style.icon} src={src} alt={alt} />
    </a>
  );
};
