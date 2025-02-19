import clsx from 'clsx';
import { Icon } from '../icon';
import { IconName } from '../icon/IconPaths';
import { Spinner } from '../spinner';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  mode?: 'dark' | 'light';
  align?: 'left' | 'center';
  size?: 'small' | 'medium' | 'large';
  iconLeft?: boolean;
  iconRight?: boolean;
  icon?: IconName;
  label: string;
  className?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
  onClick?: () => void;
}

export const Button = ({
  variant = 'primary',
  mode = 'light',
  align = 'left',
  size = 'large',
  iconLeft = false,
  iconRight = true,
  icon = "arrowRightFull",
  fullWidth = false,
  isLoading = false,
  disabled = false,
  label,
  className,
  onClick,
  ...props
}: ButtonProps) => {
  const baseStyles = "flex items-center gap-2 rounded-sm font-bold max-w-[430px] focus-visible:outline-2 focus-visible:outline-focus-ring cursor-pointer disabled:cursor-not-allowed";
  const variantStyles = {
    primary: mode === 'light' 
    ? 'bg-cloudburst-500 border-cloudburst-500 border-1 text-neutral-white hover:bg-cloudburst-400 active:bg-cloudburst-700 disabled:bg-cloudburst-150 disabled:border-cloudburst-150 disabled:text-cloudburst-extralight' 
    : 'bg-neutral-100 border-cloudburst-500 border-1 text-cloudburst-dark hover:bg-cloudburst-200 active:bg-cloudburst-250 disabled:bg-cloudburst-500 disabled:border-cloudburst-500 disabled:text-cloudburst-medium',
    secondary: mode === 'light' 
    ? 'text-cloudburst-dark border-1 border-cloudburst-500 hover:bg-cloudburst-200 active:bg-cloudburst-300 disabled:bg-cloudburst-100 disabled:border-cloudburst-150 disabled:text-cloudburst-extralight' 
    : 'text-neutral-white border-1 bg-cloudburst-700 border-neutral-100 hover:bg-cloudburst-600 active:bg-cloudburst-500 disabled:bg-cloudburst-700 disabled:border-cloudburst-400 disabled:text-cloudburst-medium',
  }
  const alignStyles = {
    left: 'justify-between',
    center: 'justify-center',
    right: 'justify-end',
  }
  const sizeStyles = {
    small: 'py-2 px-4 text-sm leading-6 min-w-[60px]',
    medium: 'py-3 px-6 text-sm leading-6 min-w-[72px]',
    large: 'py-5 px-6 text-base min-w-[96px]',
  }
  return (
    <button className={clsx(
      baseStyles,
      variantStyles[variant],
      alignStyles[align],
      sizeStyles[size],
      fullWidth && 'w-button-fullWidth',
      className
      )}
      onClick={onClick}
      disabled={isLoading ? true : disabled}
      {...props}
    >
      {iconLeft && !isLoading && <Icon name={icon} />}
      {label}
      {iconRight && !isLoading && <Icon name={icon} />}
      {isLoading && <Spinner />}
    </button>
  );
};
