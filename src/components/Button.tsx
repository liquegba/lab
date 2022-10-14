import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    asChild?: boolean;
}

export function Button({ children, asChild, ...props}: ButtonProps ){
    const Comp = asChild ? Slot : 'button';
    return(
        <Comp   
            className={clsx(
                'py-3 px-4 bg-beije-900 rounded font-semibold text-black text-sm w-full transition-colors hover:bg-beije-700 focus:ring-2 ring-beije-900',
                )}
                {...props}
        >
            {children}
        </Comp>
    )
}