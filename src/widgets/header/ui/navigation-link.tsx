import { Link } from '@/shared';
import { HoverUnderline } from '@/shared/components/ui/hover-underline';

interface NavigationLinkProps {
  link: string;
  label: string;
  isExternal?: boolean;
  onClick?: () => void;
}

export const NavigationLink = ({
  link,
  label,
  isExternal,
  onClick,
}: NavigationLinkProps) => {
  return (
    <Link
      href={link}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      onClick={onClick}
      aria-label={label}
      className='focus-ring group text-text-primary text-body block rounded-2xl py-3 md:px-3 md:py-5 lg:px-5'
    >
      <HoverUnderline lineClassName='bg-text-primary'>{label}</HoverUnderline>
    </Link>
  );
};
