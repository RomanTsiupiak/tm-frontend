import { SVGAttributes } from 'react';

export type IconBaseProps = {
  size?: string;
} & SVGAttributes<SVGElement>;

export const IconBase = ({ size = '24', children, ...rest }: IconBaseProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...rest}>
    {children}
  </svg>
);
