import React, { ReactNode } from "react"
import '../styles/floatingbox.module.scss'

export const FloatingBox: React.FC<{children: ReactNode}> = ({children}) => {
    return (
        <div className="floatingbox">
            {children}
        </div>  
    )
}