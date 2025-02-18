import { ComponentProps } from "react";
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends ComponentProps<'button'> {
    children: React.ReactNode
}

export function Button({children, ...props}: ButtonProps){
    return (
        <button 
            {...props}
            className={
                    "cursor-pointer rounded-xl text-blue hover:text-gray-800 transition-colors duration-300 bg-gray-500 hover:bg-blue" + 
                    ` ${props.className}`
                }
            >
            {children}
        </button>
    )
}

export function SendButton({ children, ...props }: ButtonProps) {
    return (
        <Button {...props} className="flex font-semibold items-center justify-between w-full px-5 py-3">
            { children }
            <ArrowRight className="text-lg font-semibold" />
        </Button>
    )
}