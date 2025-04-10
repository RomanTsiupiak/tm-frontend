import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { ButtonBase, FieldBase } from '@/components';
import { useForm } from '@/hooks/useForm';

const SignUpSchema = z.object({
  email: z.string(),
  password: z.string(),
  confirmPassword: z.string(),
});

export const SignUp = () => {
  const onSubmit = () => {
    console.log('submit');
  };

  const {
    Form,
    control,
    formState: { errors },
  } = useForm({
    onSubmit,
    resolver: zodResolver(SignUpSchema),
  });

  return (
    <div className="p-10">
      <h1 className="text-lg text-center font-semibold">Create Account</h1>

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

        <FieldBase
          label="Confirm Password"
          name="confirmPassword"
          control={control}
          type="password"
          error={errors.confirmPassword}
        />

        <div className="flex justify-end mt-2">
          <ButtonBase type="submit">Sign Up</ButtonBase>
        </div>
      </Form>
    </div>
  );
};
