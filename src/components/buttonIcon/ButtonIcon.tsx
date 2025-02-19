import clsx from "clsx";
import { Icon } from "../icon";
import { IconName } from "../icon/IconPaths";


interface ButtonIconProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant: 'narrow' | 'small' | 'large';
    icon: IconName;
    mode: 'light' | 'dark';
    disabled?: boolean;
    className?: string;
    draggable?: boolean;  // Enables dragging (default: false)
    onClick: () => void;
    onDragStart?: () => void;
    onDrag?: () => void;
    onDragEnd?: () => void;
    onDragOver?: () => void;
    onDrop?: () => void;

    // Optional: Custom grab event for better UX
    onGrab?: () => void;
}

export const ButtonIcon = ({
    variant = 'narrow',
    icon = 'dragDots',
    mode = 'light',
    disabled = false,
    className,
    draggable,
    onClick,
    ...props
}: ButtonIconProps) => {
    const baseStyles = 'rounded-xs grid place-content-center focus-visible:outline-2 focus-visible:outline-focus-ring cursor-pointer disabled:cursor-not-allowed';
    const variantStyles = {
        narrow: 'w-4 h-6',
        small: 'w-6 h-6',
        large: 'w-8 h-8',
    };
    const modeStyles = {
        light: 'text-cloudburst-300 hover:bg-cloudburst-150 active:bg-cloudburst-200 disabled:text-cloudburst-200',
        dark: 'text-cloudburst-400 hover:bg-cloudburst-500 active:bg-cloudburst-400 disabled:text-cloudburst-500',
    };

    return (
        <button
            draggable={draggable}
            onClick={onClick}
            disabled={disabled}
            className={clsx(
                draggable ? 'hover:cursor-grab' : 'hover:cursor-pointer',
                baseStyles,
                variantStyles[variant],
                modeStyles[mode],
                className
            )}
            {...props}
        >
            <Icon size={variant !== 'large' ? 16 : 24} name={icon} />
        </button>
    );
};
