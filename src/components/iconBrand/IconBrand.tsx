import clsx from "clsx";
import { iconBrands, IconBrands } from "./IconBrands";

interface IconBrandProps {
    name: IconBrands;
    size?: number;
    className?: string;
}

export const IconBrand = ({
    name = 'google',
    size = 24,
    className,
    ...props
}: IconBrandProps) => {
    const IconPath = iconBrands[name];
    if (!IconPath) {
        console.warn(`Icon ${name} not found`);
        return null;
    }

    return (
        <svg
            className={clsx(
                className)}
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            {...props}
        >
            {IconPath.path}
        </svg>
    );
}