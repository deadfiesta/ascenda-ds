import { ReactNode } from 'react';
import './styles.css';


interface SwatchItemProps {
    shade: string,
    color: string,
}

interface ColorShades {
    hex: Record<string, string>;  // e.g. { "100": "#F8F9FA", "150": "#E9EAEF" }
    oklch: Record<string, string>; // e.g. { "100": "oklch(...)", "150": "oklch(...)" }
}

interface ColorData {
    name: string;
    description: string;
    shades: ColorShades;
}

interface SwatchProps {
    colorData: ColorData; // e.g. "cloudburst": { name, description, shades }
    swatch: ReactNode;
}

interface SwatchesProps {
    children: ReactNode;
}


export const SwatchItem = ({ shade, color }: SwatchItemProps) => {
    console.log(color)
    return (
        <div className="flex flex-col rounded-xl max-w-40 h-28 shadow-lg shadow-cloudburst-500/10 bg-checkered overflow-clip">
            <div style={{ background: color }} className='grow'></div>
            <div className="flex flex-col bg-neutral-100 p-3">
                <span style={{ fontWeight: '700' }} className="font-bold">{shade}</span>
                <span style={{ fontSize: '10px' }} className="text-cloudburst-light text-xs">{color}</span>
            </div>
        </div>
    )
}

export const Swatch = ({ colorData }: SwatchProps) => {
    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
                <div className="uppercase font-bold">{colorData.name}</div>
                <div className="text-cloudburst-medium">{colorData.description}</div>
            </div>
            <div className="grid grid-cols-11 gap-4 w-full">
                {Object.entries(colorData.shades?.hex || {}).map(([shade, color]) => (
                    <SwatchItem key={shade} shade={shade} color={color} />
                ))}
            </div>
        </div>
    )
}

export const Swatches = ({ children }: SwatchesProps) => {

    return (
        <div className="flex flex-col gap-24 w-full text-xs">
            {children}
        </div>
    )
}