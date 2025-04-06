import { ComponentProps } from 'react';
import clsx from 'clsx';

import classes from './button.module.css';

type ButtonBaseProps = {
  variant?: 'primary';
  title: string;
} & ComponentProps<'button'>;

export const ButtonBase = ({
  variant = 'primary',
  title,
  type = 'button',
  className,
  ...rest
}: ButtonBaseProps) => {
  return (
    <button
      type={type}
      className={clsx(classes.button, classes[variant], className)}
      {...rest}
    >
      {title}
    </button>
  );
};
