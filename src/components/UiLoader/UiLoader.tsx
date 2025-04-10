import clsx from 'clsx';

import classes from './uiLoader.module.css';
import { ComponentPropsWithoutRef } from 'react';

const sizes = {
  s: 'w-[16px] border-[2px]',
  m: 'w-[24px] border-[2px]',
  l: 'w-[48px] border-[2px]',
};

type LoaderProps = { size?: 's' | 'm' | 'l' } & ComponentPropsWithoutRef<'div'>;

type UiLoaderProps = {
  fullscreen?: boolean;
} & LoaderProps;

export const UiLoader = ({ fullscreen, ...rest }: UiLoaderProps) => {
  if (fullscreen) {
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <Loader {...rest} size="l" />
      </div>
    );
  }

  return <Loader {...rest} />;
};

const Loader = ({
  size = 'm',
  className = 'border-primary-500',
}: LoaderProps) => (
  <div className={clsx(classes.loader, sizes[size], className)} />
);
