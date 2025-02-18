import { ComponentProps, ReactNode } from "react";

interface InputContainerProps extends ComponentProps<'div'> {
    hasInputError?: boolean
}

export function InputContainer({ hasInputError, ...props }: InputContainerProps){
    return(
        <div
            data-hasInputError={hasInputError}
            className="bg-gray-800 outline-2 outline-gray-600 data-[hasInputError=true]:outline-danger w-full flex py-3.5 px-4 rounded-xl text-gray-400 gap-2 focus-within:outline-gray-100 group"
            {...props}
        />
    )
}

interface InputIconProps extends ComponentProps<'span'> {
    children: ReactNode
}

export function InputIcon({children, ...props}: InputIconProps) {
    return(
        <span 
            className="group-focus-within:text-gray-100 group-[&:not(:has(input:placeholder-shown))]:text-gray-100 group-data-[hasInputError=true]:text-danger"
            {...props}
        >
            { children }
        </span>
    )
}

interface InputFieldProps extends ComponentProps<'input'> {}

export function InputField(props: InputFieldProps) {
    return(
        <input 
            {...props} 
            className="flex-1 outline-0 text-gray-100"
        />
    )
}
