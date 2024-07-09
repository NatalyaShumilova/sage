import React, { ReactNode } from "react"

export const FloatingBox: React.FC<{children: ReactNode}> = ({children}) => {
    return (
        <div  >{children}</div>
    )
}