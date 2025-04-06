import { Control, useController, FieldError } from 'react-hook-form';
import { UiError } from '../UiError';

type ComponentProps = {
  label: string;
  name: string;
  control: Control<any>;
  error?: FieldError;
};

export const withFormField =
  // TODO: remove any
  <T extends Object>(Component: React.ComponentType<any>) =>
    ({ label, name, control, error, ...rest }: ComponentProps & T) => {
      const { field } = useController({ name, control });

      return (
        <div className="relative pb-4">
          <label className="text-secondary-500 text-sm">{label}</label>
          <Component {...rest} {...field} isError={!!error} />
          {error && (
            <div className="absolute bottom-0">
              <UiError error="Required" />
            </div>
          )}
        </div>
      );
    };
