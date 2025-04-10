import { zodResolver } from '@hookform/resolvers/zod';

import { ButtonBase, FieldBase, UiError } from '@/components';
import { useTabContext } from '@/components/tab/TabProvider';
import { SignUpType, SignUpSchema } from './signUp.schema';
import { useForm } from '@/hooks/useForm';

import { useSignUp } from './useSignUp';

export const SignUp = () => {
  const { signUp, isPending, apiError } = useSignUp();

  const { setTab } = useTabContext();

  const onSubmit = async ({
    firstName,
    lastName,
    email,
    password,
  }: SignUpType) => {
    await signUp({ firstName, lastName, email, password });

    setTab('signIn');
  };

  const {
    Form,
    control,
    formState: { errors },
  } = useForm({
    onSubmit,
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  return (
    <div className="p-10">
      <h1 className="text-lg text-center font-semibold">Create Account</h1>

      <Form>
        <FieldBase
          label="First name"
          name="firstName"
          control={control}
          error={errors.firstName}
        />
        <FieldBase
          label="Last name"
          name="lastName"
          control={control}
          error={errors.lastName}
        />
        <FieldBase
          label="Email"
          name="email"
          control={control}
          error={errors.email}
        />
        <FieldBase
          label="Password"
          name="password"
          control={control}
          type="password"
          error={errors.password}
        />

        <FieldBase
          label="Confirm Password"
          name="confirmPassword"
          control={control}
          type="password"
          error={errors.confirmPassword}
        />

        <div className="flex justify-between mt-2">
          <div className="flex items-center">
            {apiError && <UiError error={apiError} />}
          </div>
          <ButtonBase type="submit" loading={isPending}>
            Sign In
          </ButtonBase>
        </div>
      </Form>
    </div>
  );
};
