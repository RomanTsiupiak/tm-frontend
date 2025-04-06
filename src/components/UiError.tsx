type UiErrorProps = {
  error: string;
};

export const UiError = ({ error }: UiErrorProps) => (
  <p className="text-error-500 text-xs">{error}</p>
);
