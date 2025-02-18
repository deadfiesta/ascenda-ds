import { clsx } from "clsx";
import { IconBrand } from "../iconBrand/IconBrand";
import { iconBrands, IconBrands } from "../iconBrand/IconBrands";

export interface ButtonSSOProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: IconBrands;
    mode?: 'dark' | 'light';
    maxWidth?: boolean;
    disabled?: boolean;
    className?: string;
}

export const ButtonSSO = ({
    icon = 'google',
    mode = 'light',
    disabled = false,
    className,
    maxWidth = false,
    ...props
}: ButtonSSOProps) => {

    const baseStyles = "flex items-center justify-center gap-4 rounded-md py-5 px-4 max-w-button-max-width border-1 hover:cursor-pointer focus-visible:outline-2 focus-visible:outline-focus-ring cursor-pointer disabled:cursor-not-allowed";

    const modeStyles = {
        light: 'bg-neutral-100 border-cloudburst-200 hover:bg-cloudburst-100 active:bg-cloudburst-150 disabled:bg-cloudburst-100 disabled:border-cloudburst-150 disabled:text-cloudburst-extralight',
        dark: 'bg-cloudburst-700 border-cloudburst-250 text-neutral-white hover:bg-cloudburst-600 active:bg-cloudburst-500 disabled:bg-cloudburst-600 disabled:text-cloudburst-medium'
    }
    return (
        <button
            className={clsx(
                maxWidth && 'w-button-maxwidth',
                baseStyles,
                modeStyles[mode],
                className,
            )}
            disabled={disabled}
            {...props}
        >
            <IconBrand className={disabled ? 'opacity-25' : ''} name={icon} />
            Sign in with {iconBrands[icon].name}
        </button>

    )
}