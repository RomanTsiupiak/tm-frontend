import { ComponentProps } from 'react';
import clsx from 'clsx';

import classes from './button.module.css';

import { UiLoader } from '../UiLoader/UiLoader';

type ButtonBaseProps = {
  variant?: 'primary';
  loading?: boolean;
} & ComponentProps<'button'>;

export const ButtonBase = ({
  children,
  disabled,
  loading,
  className,
  variant = 'primary',
  type = 'button',
  ...rest
}: ButtonBaseProps) => {
  return (
    <button
      type={type}
      disabled={loading || disabled}
      className={clsx(classes.button, classes[variant], className)}
      {...rest}
    >
      {loading ? <UiLoader /> : children}
    </button>
  );
};
