import React from "react";
import { icons, IconName } from "./IconPaths";

interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
  mode?: 'positive' | 'negative' | 'black' | 'white';
}

const colorMap: Record<NonNullable<IconProps['mode']>, { primary: string; secondary?: string }> = {
  positive: { primary: 'fill-cloudburst-500', secondary: 'fill-shakespeare-500' },
  negative: { primary: 'fill-neutral-100', secondary: 'fill-shakespeare-500' },
  black: { primary: 'fill-black' },
  white: { primary: 'fill-white' },
};

export const Icon = ({
  name,
  size = 24,
  mode,
  ...props
}: IconProps) => {
  //Get the icon path from the icons object
  const IconPath = icons[name];

  //If the icon path is not found, log a warning and return null
  if (!IconPath) {
    console.warn(`Icon ${name} not found`);
    return null;
  }
  //Get the colors for the icon based on the mode
  const colors = mode ? colorMap[mode] : { primary: 'currentColor', secondary: 'currentColor' };

  //Clone the icon path and update the color based on the mode
  const updatedPath = React.cloneElement(IconPath, {
    children: React.Children.map(IconPath.props.children, (child) => {
      if (React.isValidElement<{ 'data-color'?: string }>(child)) {
        const dataColor = child.props['data-color'];
        const className = dataColor === 'primary' ? colors.primary : dataColor === 'secondary' ? colors.secondary : '';
        return React.cloneElement(child, { className } as React.SVGProps<SVGElement>);
      }
      return child;
    }),
  });

  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={`${!mode ? 'currentColor' : ''}`}
    {...props}
    >
      {updatedPath}
    </svg>
  );
};