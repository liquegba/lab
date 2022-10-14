import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ReactNode } from 'react';

export interface ButtonProps {
    children: ReactNode;
    asChild?: boolean;
}

export function Button({ children, asChild}: ButtonProps ){
    const Comp = asChild ? Slot : 'button';
    return(
        <Comp   
            className={clsx(
                'py-4 px-3 bg-beije-700 rounded font-semibold text-black text-sm w-full transition-colors hover:bg-White focus:ring-2 ring-beije-900',
                )}
        >
            {children}
        </Comp>
    )
}