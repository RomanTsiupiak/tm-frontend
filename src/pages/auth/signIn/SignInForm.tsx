import { zodResolver } from '@hookform/resolvers/zod';

import { ButtonBase, FieldBase, UiError } from '@/components';
import { useForm } from '@/hooks/useForm';
import { authService } from '@/services/authService';

import { useSignIn } from './useSignIn';
import { SignInType, SignInSchema } from './signIn.schema';

export const SignIn = () => {
  const { signIn, isPending, apiError } = useSignIn();

  const onSubmit = async (data: SignInType) => {
    const authData = await signIn(data);

    authService.setAuth(authData);
    window.location.href = '/dashboard';
  };

  const {
    Form,
    control,
    formState: { errors },
  } = useForm({
    onSubmit,
    resolver: zodResolver(SignInSchema),
    defaultValues: { email: '', password: '' },
  });

  return (
    <div className="p-10">
      <h1 className="text-lg text-center font-semibold">Welcome Back</h1>

      <Form>
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
