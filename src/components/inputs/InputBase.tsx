import { ComponentProps } from 'react';
import clsx from 'clsx';

import classes from './input.module.css';
import { withFormField } from './withFormField';

type InputBaseProps = {
  isError?: boolean;
} & ComponentProps<'input'>;

export const InputBase = ({
  type = 'text',
  isError,
  className,
  ...rest
}: InputBaseProps) => {
  return (
    <input
      type={type}
      className={clsx(classes.input, isError && classes.error, className)}
      autoComplete="off"
      {...rest}
    />
  );
};

export const FieldBase = withFormField<InputBaseProps>(InputBase);
