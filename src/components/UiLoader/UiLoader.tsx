import clsx from 'clsx';

import classes from './uiLoader.module.css';

const sizes = {
  s: 'w-[16px] border-[2px]',
  m: 'w-[24px] border-[2px]',
  l: 'w-[16px] border-[2px]',
};

type UiLoaderProps = {
  size?: 's' | 'm' | 'l';
};

export const UiLoader = ({ size = 'm' }: UiLoaderProps) => {
  return <div className={clsx(classes.loader, sizes[size])} />;
};
