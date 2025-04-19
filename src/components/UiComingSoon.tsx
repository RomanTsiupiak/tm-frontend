type UiComingSoonProps = {
  name: string;
};

export const UiComingSoon = ({ name }: UiComingSoonProps) => (
  <div className="w-full h-full flex items-center justify-center">
    {name} - Coming Soon!
  </div>
);
