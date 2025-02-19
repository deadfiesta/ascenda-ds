import { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import "./spinner.css";

interface SpinnerProps {
    size?: number;
    className?: string;
}

export const Spinner = ({
    size = 24,
    className,
    ...props
}: SpinnerProps) => {
    const circleRef = useRef<SVGCircleElement>(null);
    const [strokeLength, setStrokeLength] = useState(0);

    useEffect(() => {
        if (!circleRef.current) {
            console.warn("circleRef is not attached yet!");
            return;
        }

        const totalLength = circleRef.current.getTotalLength();
        setStrokeLength(totalLength);

        document.documentElement.style.setProperty("--stroke-length", `${totalLength}`);
        document.documentElement.style.setProperty("--stroke-length-small", `${totalLength * 0.1}`);
        document.documentElement.style.setProperty("--stroke-length-negative", `${totalLength * -0.9}`);

    }, []);
    return (
        <div className={clsx('grid place-content-center', className)} {...props}>
            <svg
                id='loader'
                viewBox='0 0 24 24'
                className='stroke-2 stroke-current fill-none spinning'
                width={size}
                height={size}
            >
                <circle
                    className='trim'
                    cx='12'
                    cy='12'
                    r='8'
                    ref={circleRef}
                    strokeDasharray={strokeLength}
                />
            </svg>
        </div >
    )
};