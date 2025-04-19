import { IconBase, IconBaseProps } from '../IconBase';

export const MenuIcon = (props: IconBaseProps) => {
  return (
    <IconBase {...props}>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={2}
        d="M21.6 19.2H2.4M15 12H2.4m19.2-7.2H2.4"
      />
    </IconBase>
  );
};
