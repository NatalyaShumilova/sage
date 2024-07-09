import React, { ReactNode } from "react"

export const FloatingBox: React.FC<{children: ReactNode}> = ({children}) => {
    return (
        <div style={{
        background: "white", 
        borderRadius: "5px", 
        boxShadow: "1px 4px 8px 0 #89BF8F33", 
        padding: "10px 20px"}}>
            {children}
        </div>
    )
}