import { ComponentProps, useCallback } from 'react';
import {
  FieldValues,
  useForm as useHookForm,
  UseFormProps as UseHookFormProps,
} from 'react-hook-form';

type UseFormProps<T extends FieldValues> = {
  onSubmit: () => void;
} & UseHookFormProps<T>;

export const useForm = <T extends FieldValues>({
  onSubmit,
  ...rest
}: UseFormProps<T>) => {
  const controller = useHookForm<T>({ ...rest });

  const Form = useCallback(
    ({ children, ...rest }: ComponentProps<'form'>) => (
      <form {...rest} onSubmit={controller.handleSubmit(onSubmit)} noValidate>
        {children}
      </form>
    ),
    []
  );

  return { Form, ...controller };
};
